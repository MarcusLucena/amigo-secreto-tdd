import {useRecoilValue} from "recoil";
import {listaParticipantesStore} from "../atom";

export const useListaParticipantes = () => {
    return useRecoilValue(listaParticipantesStore)
}