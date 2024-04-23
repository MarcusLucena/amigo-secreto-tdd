import {useListaParticipantes} from "./useListaParticipantes";
import {useSetRecoilState} from "recoil";
import {resultadoSorteioStore} from "../atom";
import {realizarSorteio} from "../helpers/realizarSorteio";

export const useSorteador = () => {
    const participantes = useListaParticipantes();
    const setResultado = useSetRecoilState(resultadoSorteioStore);
    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado);
    }
}