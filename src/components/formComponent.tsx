import { FormComponentProps } from "@/types";

const FormComponent = ({ inputs, buttons, message }: FormComponentProps) => {
    return (
        <form>
            {inputs.map((inputProps, index) => (
                <input key={index} {...inputProps} />
            ))}
            {buttons.map((buttonProps, index) => (
                <button key={index} {...buttonProps} />
            ))}
            {message && (
                <div style={{ color: message[0].type === 'error' ? 'red' : 'green' }}>
                    {message[0].msg}
                </div>
            )}
        </form>
    );
};

export default FormComponent;
