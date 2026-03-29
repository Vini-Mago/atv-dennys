import { definirStatus } from "./statusEstoque.js";

test("produto com estoque menor que 5 deve ser crítico", () => {
  const produto = { estoque: 3 };
  expect(definirStatus(produto)).toBe("Crítico");
});