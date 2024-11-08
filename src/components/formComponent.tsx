import styled from "styled-components";
import { StyleButton, StyleInput, StyledP } from "@/components";
import { FormComponentProps } from "@/types";
import { pxToRem } from "@/utils";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${pxToRem(16)};
`;


function FormComponent(props: FormComponentProps) {
    const { inputs, buttons, message } = props
    return (
        <StyledForm>
            {inputs.map((inputProps, index) => (
                <StyleInput key={index} {...inputProps} />
            ))}
            {buttons.map((buttonProps, index) => (
                <StyleButton key={index} {...buttonProps} />
            ))}
            {message && (
                <StyledP className={message.type === 'error' ? 'error' : 'success'}>
                    {message.msg}
                </StyledP>
            )}
        </StyledForm>
    )
}

export default FormComponent
