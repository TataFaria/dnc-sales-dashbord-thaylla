import { BannerImage } from "@/components";
import { Box, Container, Grid2 } from "@mui/material";


const Login = () => {
    return (
        <>
            <Box>
                <Grid2 container component="div">
                    <Grid2 component="div" sx={{ flex: { xs: "100%", sm: "40%" }, alignItems: 'center', display: 'flex', height: '100vh' }}>
                        <Container maxWidth='sm'>
                            <h1>LOGIN</h1>
                        </Container>
                    </Grid2>
                    <Grid2 component="div" sx={{ flex: { xs: "50%", sm: "40%" }, display: { xs: 'grid', sm: 'block' } }}>
                        <BannerImage />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
};

export default Login;