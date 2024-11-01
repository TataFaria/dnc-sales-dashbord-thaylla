import { Box, Container, Grid2 } from "@mui/material";
import { BannerImage } from "@/components";


const Registration = () => {
    return (
        <>

            <Box>
                <Grid2 container component="div">
                    <Grid2 component="div" sx={{ flex: { xs: "100%", sm: "50%" }, alignItems: 'center', display: 'flex', height: '100vh' }}>
                        <Container maxWidth='sm'>
                            <h1>CADASTRO</h1>
                        </Container>
                    </Grid2>
                    <Grid2 component="div" sx={{ flex: { xs: "50%", sm: "50%" }, display: { xs: 'grid', sm: 'block' } }}>
                        <BannerImage />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
};

export default Registration;