// O hook personalizado serve para encapsular a lógica de requisições HTTP usando Axios.
//Isso nos permitirá:
//1-Reutilizar código
//2-Gerenciar estados de loading, erro e dados de forma consistente
//3-Simplificar a implementação de requisições em componentes


// A tipagem T significa os dados que vão vir de resposta
// A tipagem P seram os dados que seram enviados para acontecer a request POST 

import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`
});

export const usePost = <T, P>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoding] = useState(false);
    const [error, setError] = useState<number | null>(null);

    const postData = async (postData: P, config?: AxiosRequestConfig) => {
        setData(null)
        setLoding(true)
        setError(null)

        try {
            const response = await axiosInstance({
                url: endpoint,
                method: 'POST',
                data: postData,
                headers: {
                    'Content-Type': 'application/json',
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
        } catch (e: any) {
            setError(e.response.status ?? 500)
        } finally {
            setLoding(false)
        }
    }

    return { data, loading, error, postData }
}