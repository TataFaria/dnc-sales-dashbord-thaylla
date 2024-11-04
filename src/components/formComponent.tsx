import styled from "styled-components";
import { StyleButton, StyleInput } from "@/components";
import { FormComponentProps } from "@/types";
import { pxToRem } from "@/utils";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${pxToRem(16)};
`;


const FormComponent = ({ inputs, buttons, message }: FormComponentProps) => {
    return (
        <StyledForm>
            {inputs.map((inputProps, index) => (
                <StyleInput key={index} {...inputProps} />
            ))}
            {buttons.map((buttonProps, index) => (
                <StyleButton key={index} {...buttonProps} />
            ))}
            {message && (
                <div style={{ color: message[0].type === 'error' ? 'red' : 'green' }}>
                    {message[0].msg}
                </div>
            )}
        </StyledForm>
    );
};

export default FormComponent;
