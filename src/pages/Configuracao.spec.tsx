import React from "react";
import {render} from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Configuracao from "./Configuracao";

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

describe("Pagina de configuracao", () => {
    test("deve renderizar corretamente", () => {
        const {container } = render(<RecoilRoot><Configuracao /></RecoilRoot>);

            expect(container).toMatchInlineSnapshot(`
<div>
  <form>
    <input
      placeholder="Insira os nomes dos participantes"
      type="text"
      value=""
    />
    <button
      disabled=""
      type="submit"
    >
      Adicionar
    </button>
    
  </form>
  <ul />
  <ul />
  <footer>
    <button
      disabled=""
    >
      Sortear
    </button>
  </footer>
</div>
`);
    });
});