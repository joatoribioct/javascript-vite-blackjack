import _ from 'underscore'
// Esta función crea un nuevo deck
/**
 * esta funcio n crea un nuevo deck
 * @param {Array<string>} tiposDeCarta ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspciales ejemplo ['A', 'J', 'Q', 'K']
 * @returns Array<string> retorna un neuvo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tipos de carta es obligatorio'); 
    if(!tiposEspciales || tiposEspciales.length === 0 ) throw new Error('tipos de carta es obligatorio'); 

    let deck = []
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}