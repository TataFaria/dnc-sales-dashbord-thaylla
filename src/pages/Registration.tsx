import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// MUI
import { Container, Box, Grid2 } from '@mui/material'

// COMPONENTS
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl } from '@/components'

// HOOKS
import { useFormValidation, usePost } from '@/hooks'

// UTILS
import { pxToRem } from '@/utils'

// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { setMessage, setProfileData } from '@/redux/slices/createProfile'
import { CreateProfileData } from '@/types'


function Registration() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { data, loading, error, postData } = usePost<string, CreateProfileData>(
        'profile/create'
    )
    const { email } = useSelector((state: RootState) => state.createProfile)

    // FORM STEP 1
    const step1Inputs = [
        { type: 'text', placeholder: 'Nome Completo', required: true },
        { type: 'email', placeholder: 'Email' },
        { type: 'tel', placeholder: 'Telefone', required: true },
    ]
    const handleStep1 = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(
            setProfileData({
                email: String(step1FormValues[1]),
            })
        )
    }
    const {
        formValues: step1FormValues,
        formValid: step1FormValid,
        handleChange: step1FormHandleChange,
    } = useFormValidation(step1Inputs)

    // FORM STEP 2
    const step2Inputs = [{ type: 'password', placeholder: 'Senha' }]
    const handleStep2 = async (e: React.FormEvent) => {
        e.preventDefault()
        await postData({
            name: String(step1FormValues[0]),
            email: String(step1FormValues[1]),
            phone: String(step1FormValues[2]),
            password: String(step2FormValues[0]),
        })
    }

    const {
        formValues: step2FormValues,
        formValid: step2FormValid,
        handleChange: step2FormHandleChange,
    } = useFormValidation(step2Inputs)

    const handleStepInputs = email ? step2Inputs : step1Inputs

    useEffect(() => {
        if (data !== null) {
            dispatch(setMessage('Usuário criado com sucesso.'))
            navigate('/')
        } else if (error) {
            alert(
                `Não foi possível realizar a operação. Entre em contato com nosso suporte (${error}).`
            )
        }
    }, [data, error, navigate])

    return (
        <>
            <Box>
                <Grid2 container>
                    <Grid2 component="div"
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 50%' },
                            display: 'flex',
                            alignItems: 'center',
                            height: '100vh',
                        }}>
                        <Container maxWidth="sm">
                            <Box sx={{ marginBottom: pxToRem(24) }}>
                                <Logo height={41} width={100} />
                            </Box>
                            <Box sx={{ marginBottom: pxToRem(24) }}>
                                <StyledH1>
                                    {email ? 'Defina sua senha' : 'Faça seu cadastro'}
                                </StyledH1>
                                <StyledP>
                                    {email
                                        ? 'Sua senha deve ter:'
                                        : 'Primeiro, diga-nos quem você é.'}
                                </StyledP>
                                {email && (
                                    <StyledUl>
                                        <li>Entre 8 e 16 caracteres;</li>
                                        <li>Pelo menos uma letra maiúscula;</li>
                                        <li>Pelo menos um caractere especial.</li>
                                    </StyledUl>
                                )}
                            </Box>
                            <FormComponent
                                inputs={handleStepInputs.map((input, index) => ({
                                    type: input.type,
                                    placeholder: input.placeholder,
                                    value: email
                                        ? step2FormValues[index] || ''
                                        : step1FormValues[index] || '',
                                    onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                        email
                                            ? step2FormHandleChange(
                                                index,
                                                (e.target as HTMLInputElement).value
                                            )
                                            : step1FormHandleChange(
                                                index,
                                                (e.target as HTMLInputElement).value
                                            ),
                                }))}
                                buttons={[
                                    {
                                        className: 'primary',
                                        disabled: email
                                            ? !step2FormValid || loading
                                            : !step1FormValid,
                                        type: 'submit',
                                        onClick: email ? handleStep2 : handleStep1,
                                        children: email ? 'Enviar' : 'Próximo',
                                    },
                                ]}
                            />
                        </Container>
                    </Grid2>
                    <Grid2
                        component="div"
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 50%' },
                            display: { xs: 'none', sm: 'block' }
                        }}>
                        <BannerImage />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Registration