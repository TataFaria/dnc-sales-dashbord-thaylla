import { CardComponent, Header } from "@/components";
import { Container } from "@mui/material";


const Home = () => {
    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <CardComponent>CARD</CardComponent>
            </Container>

        </>
    );
};

export default Home;