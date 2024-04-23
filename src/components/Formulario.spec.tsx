import {act, fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import {RecoilRoot} from "recoil";

describe('Formulario', () => {

    test("quando o input esta vazio, novo participantes não podem ser adicionados", () => {
        render(
            <RecoilRoot>
                <Formulario />)
            </RecoilRoot>
        )
        // Encontrar no dom o input
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        // Encontrar o botão
        const botao = screen.getByRole("button")

        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        // farante que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    })

    test("como adicionar um novo participante", () => {
        render(
            <RecoilRoot>
                <Formulario />)
            </RecoilRoot>
        )
        // Encontrar no dom o input
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        // Encontrar o botão
        const botao = screen.getByRole("button")

        // inserir um nome no input
        fireEvent.change(input, {target: {value: "Lucas"}})

        // clicar no botão
        fireEvent.click(botao)

        expect(input).toHaveValue("")

        expect(input).toHaveFocus()

    })

    test("nomes duplicados não podem ser adicionados na lista", () => {
        render(
            <RecoilRoot>
                <Formulario />)
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const botao = screen.getByRole("button")
        fireEvent.change(input, {target: {value: "Lucas"}})
        fireEvent.click(botao)
        fireEvent.change(input, {target: {value: "Lucas"}})
        fireEvent.click(botao)

        const mensagem = screen.getByRole("alert")

        expect(mensagem.textContent).toBe("Nome duplicado, por favor insira outro nome.")

    })

    test("sumir a mensagem após 3 segundos", () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Formulario />)
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        const botao = screen.getByRole("button")
        fireEvent.change(input, {target: {value: "Lucas"}})
        fireEvent.click(botao)
        fireEvent.change(input, {target: {value: "Lucas"}})
        fireEvent.click(botao)
        let mensagem = screen.queryByRole("alert")
        expect(mensagem).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        });

        mensagem = screen.queryByRole("alert")
        expect(mensagem).toBeNull()



    })
})