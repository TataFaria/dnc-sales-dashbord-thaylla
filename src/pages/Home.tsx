import { AvatarList, CardComponent, Header } from "@/components";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";

const Home = () => {
    const mockListData = [
        {
            avatar: '/dnc-avatar.svg',
            name: 'Nome Sobrenome 1',
            subtitle: currencyConverter(4234.54),
        },
        {
            avatar: '/dnc-avatar.svg',
            name: 'Nome Sobrenome 2',
            subtitle: currencyConverter(3234.54),
        },
        {
            avatar: '/dnc-avatar.svg',
            name: 'Nome Sobrenome 3',
            subtitle: currencyConverter(1234.54),
        },
    ]
    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <CardComponent>CARD</CardComponent>
                <CardComponent>
                    <AvatarList listData={mockListData} />
                </CardComponent>
            </Container>

        </>
    );
};

export default Home;