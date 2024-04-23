import {useListaParticipantes} from "../store/hooks/useListaParticipantes";
import React, {useState} from "react";
import {useResultadoDoSorteio} from "../store/hooks/useResultadoDoSorteio";

const Sorteio = () => {
    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const participantes = useListaParticipantes();
    const resultado = useResultadoDoSorteio();
    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez) as string);
        }
    }

    return (
        <section>
            <form onSubmit={evento => sortear(evento)}>
                <select
                    required
                    name="partivipanteDavez"
                    id="partivipanteDavez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione o nome</option>
                    {participantes.map((participante) => (
                        <option key={participante} value={participante}>{participante}</option>
                    ))}
                </select>
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    );
}

export default Sorteio;