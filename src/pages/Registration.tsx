import { Box, Container, Grid2 } from '@mui/material';
import { BannerImage, FormComponent, StyledH1, StyledP, StyledUl, Logo } from '@/components';
import { pxToRem } from '@/utils';

const RegisterPage = () => (
    <Box>
        <Grid2 container component="div">
            {/* Seção da Esquerda - Formulário de Cadastro */}
            <Grid2
                component="div"
                sx={{
                    flex: { xs: '1 1 100%', sm: '1 1 50%' },
                    display: 'flex',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <Container maxWidth="sm">
                    <Box sx={{ marginBottom: pxToRem(24) }}>
                        <Box sx={{ marginBottom: pxToRem(24) }}><Logo height={41} width={100} /></Box>
                        <StyledH1>Faça seu cadastro</StyledH1>
                        <StyledP>Primeiro, diga-nos quem você é.</StyledP>
                        <StyledUl>
                            <li>Entre 8 a 16 caracteres;</li>
                            <li>Pelo menos uma letra maiúscula;</li>
                            <li>Pelo menos um caractere especial;</li>
                            <li>Pelo menos um número</li>
                        </StyledUl>
                    </Box>

                    <FormComponent
                        inputs={[
                            { type: 'text', placeholder: 'Nome' },
                            { type: 'email', placeholder: 'E-mail' },
                            { type: 'password', placeholder: 'Senha' }
                        ]}
                        buttons={[
                            { type: 'submit', className: 'primary', children: 'Cadastrar' }
                        ]}
                        message={[{ type: 'error', msg: 'Erro no cadastro. Tente novamente.' }]}
                    />
                </Container>
            </Grid2>

            {/* Seção da Direita - Imagem do Banner */}
            <Grid2
                component="div"
                sx={{
                    flex: { xs: '1 1 100%', sm: '1 1 50%' },
                    display: { xs: 'none', sm: 'block' }
                }}
            >
                <BannerImage />
            </Grid2>
        </Grid2>
    </Box>
);

export default RegisterPage;