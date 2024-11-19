import { ChangeEvent, useState, useEffect } from "react";
import { CardComponent, Header, FormComponent, StyledButton, StyledH2, CustomTable, StyledP, StyledSpan } from '@/components'
import { Container, Grid2 } from '@mui/material'

// HOOKS
import { useFormValidation, useDelete, useGet, usePost } from '@/hooks'

//TYPES
import { AxiosRequestConfig } from 'axios';
import { InputProps, LeadsData, LeadsPostData, MessageProps } from "@/types";



function Leads() {
    // FORM
    const inputs: InputProps[] = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'Nome completo',
            required: true,
        },
        { name: 'email', type: 'email', placeholder: 'Email', required: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ]
    const [createMessage, setCreateMessage] = useState<MessageProps>({
        type: 'success',
        msg: '',
    })
    const clearMessage = () => {
        setTimeout(() => {
            setCreateMessage({
                msg: '',
                type: 'success',
            })
        }, 3000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await createLeadsPostData({
            name: String(formValues[0]),
            email: String(formValues[1]),
            phone: String(formValues[2]),
        })
    }

    const handleDelete = async (id: number) => {
        if (confirm('Tem certeza que deseja excluir sua conta?') === true) {
            try {
                await leadsDeleteData({ params: { id: id } })
                alert('Lead deletado com sucesso!')
                getLeads()
            } catch (e) {
                alert(
                    'Não foi possível realizar a operação. Entre em contato com nosso suporte.'
                )
            }
        }
    }

    // HOOKS
    const {
        data: createLeadsData,
        loading: createLeadsLoading,
        error: createLeadsError,
        postData: createLeadsPostData,
    } = usePost<LeadsData, LeadsPostData>('leads/create', true)

    const {
        data: leadsData,
        loading: leadsLoading,
        error: leadsError,
        getData: getLeads,
    } = useGet<LeadsData[]>('leads')

    const { deleteData: leadsDeleteData, loading: leadsDeleteLoading } =
        useDelete<AxiosRequestConfig>(`leads/delete`)

    const { formValues, formValid, handleChange } = useFormValidation(inputs)

    useEffect(() => {
        if (createLeadsData?.id) {
            setCreateMessage({
                msg: 'Lead criado com sucesso',
                type: 'success',
            })
            getLeads()
            clearMessage()
        } else if (createLeadsError) {
            setCreateMessage({
                msg: 'Não foi possível realizar a operação. Entre em contato com nosso suporte.',
                type: 'error',
            })
            clearMessage()
        } else {
            clearMessage()
        }
    }, [createLeadsData, createLeadsError])



    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid2 container spacing={4}>
                    <Grid2 sx={{ xs: 12, sm: 7 }}>
                        <CardComponent
                            className={
                                leadsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                            }
                        >
                            {!leadsError && !leadsLoading && (
                                <>
                                    <StyledH2 className="mb-1" id="leads-title">
                                        Meus Leads
                                    </StyledH2>
                                    {leadsData?.length ? (
                                        <CustomTable
                                            headers={['Nome', 'Email', 'Telefone', '']}
                                            rows={leadsData.map((lead) => [
                                                <StyledP className="ellipsis ellipsis-xs">
                                                    {lead.name}
                                                </StyledP>,
                                                <StyledP>{lead.email}</StyledP>,
                                                <StyledP>{lead.phone}</StyledP>,
                                                <StyledButton
                                                    className="borderless-alert"
                                                    onClick={() => handleDelete(lead.id)}
                                                    disabled={leadsDeleteLoading}
                                                >
                                                    Excluir
                                                </StyledButton>,
                                            ])}
                                        />
                                    ) : (
                                        <StyledSpan>Sem leads cadastrados</StyledSpan>
                                    )}
                                </>
                            )}
                        </CardComponent>
                    </Grid2>
                    <Grid2 sx={{ xs: 12, sm: 5 }}>
                        <CardComponent>
                            <StyledH2 className="mb-1">Cadastrar Leads</StyledH2>
                            <FormComponent
                                inputs={inputs.map((input, index) => ({
                                    ...input,
                                    value: formValues[index],
                                    onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                        handleChange(index, (e.target as HTMLInputElement).value),
                                }))}
                                buttons={[
                                    {
                                        className: 'primary',
                                        disabled:
                                            !formValid || createLeadsLoading || leadsDeleteLoading,
                                        type: 'submit',
                                        onClick: handleSubmit,
                                        children: 'Cadastrar lead',
                                    },
                                ]}
                                message={createMessage}
                            />
                        </CardComponent>
                    </Grid2>

                </Grid2 >
            </Container >
        </>
    );
};

export default Leads;