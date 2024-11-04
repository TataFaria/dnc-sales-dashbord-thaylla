import { Box, Container, Grid2 } from '@mui/material';
import { BannerImage, FormComponent, Logo, StyledH1, StyledP } from '@/components';
import { pxToRem } from '@/utils';

const LoginPage = () => (
    <Box>
        <Grid2 container component="div">
            {/* Seção da Esquerda - Formulário de Login */}
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
                    <Box sx={{ marginBottom: pxToRem(24) }}><Logo height={41} width={100} /></Box>
                    <Box sx={{ marginBottom: pxToRem(24) }}>
                        <StyledH1>Bem-vindo</StyledH1>
                        <StyledP>Digite sua senha e e-mail para logar</StyledP>
                    </Box>
                    <FormComponent
                        inputs={[
                            { type: 'email', placeholder: 'E-mail' },
                            { type: 'password', placeholder: 'Senha' }
                        ]}
                        buttons={[
                            { type: 'submit', className: 'primary', children: 'Login' }
                        ]}
                        message={[{ type: 'sucess', msg: 'Login realizado com sucesso!' }]}
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

export default LoginPage;