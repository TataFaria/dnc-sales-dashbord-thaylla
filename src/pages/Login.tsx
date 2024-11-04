import { Box, Container, Grid2 } from '@mui/material';
import { BannerImage, FormComponent } from '@/components';

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
                    <div className="login-area">
                        <h2>Login</h2>
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
                    </div>
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