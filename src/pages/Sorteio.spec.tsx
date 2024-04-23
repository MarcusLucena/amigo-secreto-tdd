import React from "react";
import {RecoilRoot} from "recoil";
import {fireEvent, render, screen} from "@testing-library/react";
import {useListaParticipantes} from "../store/hooks/useListaParticipantes";
import {useResultadoDoSorteio} from "../store/hooks/useResultadoDoSorteio";
import Sorteio from "./Sorteio";

jest.mock("../store/hooks/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
});
jest.mock("../store/hooks/useResultadoDoSorteio", () => {
    return {
        useResultadoDoSorteio: jest.fn()
    }
});

describe("Sorteio", () => {
    const participantes = [
        "Ana",
        "Teles",
        'João'
        ];
    const resultadoDoSorteio = new Map([
        ["Ana", "Teles"],
        ["Teles", "João"],
        ["João", "Ana"]
    ]);

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultadoDoSorteio);
    })

    test("todos participantes podem exibir o seu amigo secreto", () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>);

        const opcoes = screen.queryAllByRole("option");
        expect(opcoes).toHaveLength(participantes.length + 1); // Porque temos que contar o option vazio, que vem por padrão
    });

    test('o amigo secreto é exibido quando solicitado', () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>);
        const select = screen.getByPlaceholderText('Selecione o seu nome');
        fireEvent.change(select, {target: {value: participantes[0]}});
        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        const amigoSecreto = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();
    })
});