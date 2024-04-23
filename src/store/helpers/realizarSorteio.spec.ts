import {realizarSorteio} from "./realizarSorteio";

describe('Realizar Sorteio', () => {
    test('o participante não sorteia o proprio nome', () => {
        const participantes = ['João', 'Maria', 'José', 'Pedro']
        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    });
})