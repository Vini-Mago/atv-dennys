export function definirStatus(produto) {
  const estoque = produto.estoque;

  if (estoque === 0) return "Esgotado";
  if (estoque < 5) return "Crítico";
  if (estoque < 10) return "Baixo";

  return "Normal";
}