import { definirStatus } from "./statusEstoque.js";

describe("Sistema de Estoque", () => {

  test("estoque 0 deve ser esgotado", () => {
    expect(definirStatus({ estoque: 0 })).toBe("Esgotado");
  });

  test("estoque menor que 5 deve ser crítico", () => {
    expect(definirStatus({ estoque: 3 })).toBe("Crítico");
  });

  test("estoque menor que 10 deve ser baixo", () => {
    expect(definirStatus({ estoque: 7 })).toBe("Baixo");
  });

  test("estoque >= 10 deve ser normal", () => {
    expect(definirStatus({ estoque: 15 })).toBe("Normal");
  });

});