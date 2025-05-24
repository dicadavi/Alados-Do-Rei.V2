// src/colorUtils.ts

// Função para escurecer a cor
export function darkenColor(hex: string, fator: number = 0.1): string {
  // Remover o "#" do início do HEX (se existir)
  if (hex[0] === "#") {
    hex = hex.substring(1);
  }

  // Converter o HEX para RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Escurecer a cor diminuindo os valores de R, G e B
  r = Math.max(0, r - r * fator);
  g = Math.max(0, g - g * fator);
  b = Math.max(0, b - b * fator);

  // Converter de volta para HEX
  const rHex = Math.round(r).toString(16).padStart(2, "0");
  const gHex = Math.round(g).toString(16).padStart(2, "0");
  const bHex = Math.round(b).toString(16).padStart(2, "0");

  // Retornar o novo código hexadecimal
  return `#${rHex}${gHex}${bHex}`;
}

// Função para clarear a cor
export function lightenColor(hex: string, fator: number = 0.1): string {
  // Remover o "#" do início do HEX (se existir)
  if (hex[0] === "#") {
    hex = hex.substring(1);
  }

  // Converter o HEX para RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Clarear a cor aumentando os valores de R, G e B
  r = Math.min(255, r + (255 - r) * fator);
  g = Math.min(255, g + (255 - g) * fator);
  b = Math.min(255, b + (255 - b) * fator);

  // Converter de volta para HEX
  const rHex = Math.round(r).toString(16).padStart(2, "0");
  const gHex = Math.round(g).toString(16).padStart(2, "0");
  const bHex = Math.round(b).toString(16).padStart(2, "0");

  // Retornar o novo código hexadecimal
  return `#${rHex}${gHex}${bHex}`;
}
