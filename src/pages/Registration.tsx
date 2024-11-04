import { Box, Container, Grid2 } from '@mui/material';
import { BannerImage, FormComponent } from '@/components';

const RegisterPage = () => (
    <Box>
        <Grid2 container component="div">
            {/* Seção da Esquerda - Formulário de Cadastro */}
            <Grid2
                component="div"
                sx={{
                    xs: 12,
                    sm: 6,
                    display: 'flex',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <Container maxWidth="sm">
                    <div className="register-area">
                        <h2>Cadastro</h2>
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
                    </div>
                </Container>
            </Grid2>

            {/* Seção da Direita - Imagem do Banner */}
            <Grid2
                component="div"
                sx={{
                    xs: 12,
                    sm: 6,
                    display: { xs: 'none', sm: 'block' }
                }}
            >
                <BannerImage />
            </Grid2>
        </Grid2>
    </Box>
);

export default RegisterPage;