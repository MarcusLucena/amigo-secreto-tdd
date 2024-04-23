import React from "react";
import {useListaParticipantes} from "../store/hooks/useListaParticipantes";
import { useNavigate } from "react-router-dom";
import {useSorteador} from "../store/hooks/useSorteador";

const Rodape = () => {
    const navegarPara = useNavigate();
    const participantes = useListaParticipantes();
    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navegarPara("/sorteios")
    }

    return (
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciar}>Sortear</button>
        </footer>
    );
}

export default Rodape;