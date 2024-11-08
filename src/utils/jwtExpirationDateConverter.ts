/**
* Converte a data de expiração do JWT de segundos para dias
* @param exp - Number to bem converted
* @returns Converted exp in days
*/
export function jwtExpirationDateConverter(exp: number): number {
    const currentTime = Math.floor(Date.now() / 1000);
    const secondsUntilExpiration = exp - currentTime;
    const secondsInADay = 60 * 60 * 24;
    const daysUntilExpiration = secondsUntilExpiration / secondsInADay;
    return daysUntilExpiration;
}