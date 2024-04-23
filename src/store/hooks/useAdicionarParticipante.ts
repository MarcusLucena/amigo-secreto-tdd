import {useRecoilValue, useSetRecoilState} from "recoil";
import {ErroStore, listaParticipantesStore} from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesStore);
    const lista = useRecoilValue(listaParticipantesStore);
    const setError = useSetRecoilState(ErroStore);
    return (nome: string) => {
        if (lista.includes(nome)) {
            setError("Nome duplicado, por favor insira outro nome.");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        }
        return setLista((lista) => [...lista, nome]);
    }
}

export const useGetParticipantes = () => {
    const lista = useRecoilValue(listaParticipantesStore);
    return lista;
}