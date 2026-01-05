/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Numbre} que es el valor de la carta
 */

// pedirCarta();
export const valorCarta = (carta) => {

  const valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}
