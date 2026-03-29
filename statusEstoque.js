export function definirStatus(produto) {
  if (produto.estoque < 5) return "Crítico";
}
