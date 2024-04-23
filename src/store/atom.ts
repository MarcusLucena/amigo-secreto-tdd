import {atom} from "recoil";

export const listaParticipantesStore = atom<string[]>({
    key: 'listaParticipantesStore',
    default: []
});

export const resultadoSorteioStore = atom<Map<string, string>>({
    key: 'resultadoSorteioStore',
    default: new Map<string, string>()
});

export const ErroStore = atom<string>({
    key: 'ErroStore',
    default: ''
});