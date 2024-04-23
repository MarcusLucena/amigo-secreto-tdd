import {RecoilRoot} from "recoil";
import {render, screen} from "@testing-library/react";
import ListaParticipantes from "./ListaParticipantes";
import React from "react";
import { useListaParticipantes } from "../store/hooks/useListaParticipantes";

jest.mock("../store/hooks/useListaParticipantes", () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

describe('ListaParticipantes', () => {

    it('uma lista vazia', () => {
      (useListaParticipantes as jest.Mock).mockReturnValue([])
      render(
          <RecoilRoot>
              <ListaParticipantes />
          </RecoilRoot>
      )
      const itens = screen.queryAllByRole('listitem');
      expect(itens).toHaveLength(0)
    })

    it('uma lista preenchida', () => {
      const participantes = ['participante 1', 'participante 2'];
      (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
      render(
          <RecoilRoot>
              <ListaParticipantes />
          </RecoilRoot>
      )
      const itens = screen.queryAllByRole('listitem');
      expect(itens).toHaveLength(participantes.length)
    })
});