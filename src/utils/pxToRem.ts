/**
* Converte um valor em pixels para REM
* @param pixels - Valor em pixels a ser convertido
* @returns O valor convertido em REM
*/
export function pxToRem(pixels: number): string {
    return `${pixels / 16}rem`;
}