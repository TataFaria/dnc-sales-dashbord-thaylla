import { useState, useEffect } from 'react';
import { InputProps } from '@/types';

export const useFormValidation = (inputs: InputProps[]) => {
    const [formValues, setFormValues] = useState(inputs.map((input) => input.value || ''))
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        const allFieldValid = inputs.every((input, index) => {
            if (input.type === 'email') {
                return /\S@+\S+\.\S+/.test(String(formValues[index]))
            }
            if (input.type === 'password') {
                const password = String(formValues[index]);
                const hasCorrectLength = password.length >= 8 && password.length <= 16
                const hasUppercaseLetter = /[A-Z]/.test(password)
                const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password)
                const hasNumber = /\d/.test(password)

                return (
                    hasCorrectLength &&
                    hasUppercaseLetter &&
                    hasSpecialCharacter &&
                    hasNumber
                )
            }

            return true
        })
        setFormValid(allFieldValid)
    }, [formValues, inputs])


    const handleChange = (index: number, value: string) => {
        setFormValues(prevValues => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        })
    }

    return { formValues, formValid, handleChange }
};