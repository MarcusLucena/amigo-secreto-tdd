import React, {useRef, useState} from "react";
import {useGetParticipantes, useAdicionarParticipante} from "../store/hooks/useAdicionarParticipante";
import {useError} from "../store/hooks/useError";

const Formulario = () => {
    const [nome, setNome] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const adicionarNaLista = useAdicionarParticipante()
    const mensagemErro = useError();
    const participantes = useGetParticipantes();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    };

    return (
        <>
            <form onSubmit={adicionarParticipante}>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button
                    type="submit"
                    disabled={!nome}
                >Adicionar
                </button>
                {
                    mensagemErro && <p role="alert">{mensagemErro}</p>
                }
            </form>
            <ul>
                {participantes.map((participante, index) => (
                    <li key={index}>{participante}</li>
                ))}
            </ul>
        </>
    )
}

export default Formulario;