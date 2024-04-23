import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import Rodape from "./Rodape";
import {useListaParticipantes} from "../store/hooks/useListaParticipantes";

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});
jest.mock('../store/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
});

jest.mock("../store/hooks/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

describe('Footer', () => {
    it('não existem participantes suficientes', () => {
        (useListaParticipantes as jest.Mock).mockReturnValueOnce([])
        render(<RecoilRoot><Rodape /></RecoilRoot>)
        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled();
    });

    it('verificar se o botao esta habilitado', () => {
        (useListaParticipantes as jest.Mock).mockReturnValueOnce(['Lucas', 'João', 'Maria', 'Pedro'])
        render(<RecoilRoot><Rodape /></RecoilRoot>)
        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled();
    });

    it('verificar se a navegação foi chamada', () => {
        (useListaParticipantes as jest.Mock).mockReturnValueOnce(['Lucas', 'João', 'Maria', 'Pedro'])
        render(<RecoilRoot><Rodape /></RecoilRoot>)
        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteios');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
});