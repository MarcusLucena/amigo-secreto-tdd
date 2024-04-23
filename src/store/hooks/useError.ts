import {useRecoilValue} from "recoil";
import {ErroStore} from "../atom";

export const useError = () => {
    const mensagem = useRecoilValue(ErroStore);
    return mensagem;
}