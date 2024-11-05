/**
* Converte para formato de moeda brasileira (BRL)
* @param value - Number to be converted
* @returns Converted BRL string 
*/
export const currencyConverter = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

//Intl.NumberFormat, que é uma API nativa do JavaScript usada para formatar
//números de acordo com a localização e estilo desejados.