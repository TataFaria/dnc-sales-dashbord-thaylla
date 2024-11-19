import { Header } from "@/components";
import { CardComponent, Header, FormComponent, StyledButton, StyledH2, CustomTable } from '@/components'
import { Container, Grid2 } from '@mui/material'

// HOOKS
import { useFormValidation, useDelete, useGet, usePost } from '@/hooks'

//TYPES
import { InputProps } from "@/types";
import { ChangeEvent } from "react";


function Leads() {
    const inputs: InputProps[] = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email', required: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ]
    const { formValues, formValid, handleChange } = useFormValidation(inputs)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    }



    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid2 container spacing={4}>
                    <Grid2 sx={{ xs: 12, sm: 7 }}>
                        <CardComponent>
                            <StyledH2 className="mb-1">Meus Leads</StyledH2>
                            <CustomTable
                                headers={['Nome', 'Email', 'Telefone', '']}
                                rows={[['', '', '', '']]}
                            />
                        </CardComponent>
                    </Grid2>
                    <Grid2 sx={{ xs: 12, sm: 5 }}></Grid2>
                    <CardComponent>
                        <StyledH2 className="mb-1">Cadastrar Leads</StyledH2>
                        <FormComponent
                            inputs={inputs.map((input, index) => ({
                                ...input,
                                value: formValues[index],
                                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                    handleChange(
                                        index,
                                        (e.target as HTMLInputElement).value
                                    ),
                            }))}
                            buttons={[
                                {
                                    className: 'primary',
                                    disabled: !formValid,
                                    id: 'update-profile',
                                    type: 'submit',
                                    onClick: handleSubmit,
                                    children: 'Cadastrar Lead',
                                },
                            ]}

                        />
                    </CardComponent>

                </Grid2 >
            </Container >
        </>
    );
};

export default Leads;