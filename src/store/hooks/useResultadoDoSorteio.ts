import {useRecoilValue} from "recoil";
import {resultadoSorteioStore} from "../atom";

export const useResultadoDoSorteio = () => {
    return useRecoilValue(resultadoSorteioStore);
}