import { ChangeEvent, useEffect } from 'react';

//COMPONENTS
import { Box, Container, Grid2 } from '@mui/material';
import { BannerImage, FormComponent, Logo, StyledH1, StyledP } from '@/components';

//HOOKS
import { useFormValidation, usePost } from '@/hooks';

//UTILS
import { pxToRem } from '@/utils';

//TYPES
import { MessageProps, LoginData, LoginPostData } from '@/types';


function Login() {
    const inputs = [
        { types: 'email', placeholder: 'Email' },
        { types: 'password', placeholder: 'Senha' },
    ]
    const { data, loading, error, postData } = usePost<LoginData, LoginPostData>('login')
    const { formValues, formValid, handleChange } = useFormValidation(inputs)

    const handleMessage = (): MessageProps => {
        if (!error)
            return {
                msg: '',
                type: 'success',
            }
        switch (error) {
            case 401:
                return {
                    msg: 'Email e/ou senha inválidos.',
                    type: 'error',
                }
            default:
                return {
                    msg: 'Não foi possível realizar a operação. Entre em contato com nosso suporte.',
                    type: 'error',
                }
        }
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await postData({
            email: String(formValues[0]),
            password: String(formValues[1])
        })
    };

    useEffect(() => {
        if (data?.jwt_token) {
            console.log('DATA: ', data)
        }
    }, [data]);

    return (
        <>
            <Box>
                <Grid2 container>
                    <Grid2
                        component="div"
                        sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 50%' },
                            display: 'flex',
                            alignItems: 'center',
                            height: '100vh',
                        }}
                    >
                        <Container maxWidth="sm">
                            <Box sx={{ marginBottom: pxToRem(24) }}>
                                <Logo height={41} width={100} />
                            </Box>
                            <Box sx={{ marginBottom: pxToRem(24) }}>
                                <StyledH1>Bem-vindo</StyledH1>
                                <StyledP>Digite sua senha e email para logar</StyledP>
                            </Box>
                            <FormComponent
                                inputs={inputs.map((input, index) => ({
                                    type: input.types,
                                    placeholder: input.placeholder,
                                    value: formValues[index] || '',
                                    onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                        handleChange(index, (e.target as HTMLInputElement).value),
                                }))}
                                buttons={[
                                    {
                                        className: 'primary',
                                        disabled: !formValid || loading,
                                        type: 'submit',
                                        onClick: handleSubmit,
                                        children: loading ? 'Aguarde...' : 'Login',
                                    },
                                ]}
                                message={handleMessage()}
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

export default Login;