import React, { useState, useEffect } from "react";

const colors = [
  "#ffe2d6", // Exemplo de cor
  "#249472", // Exemplo de cor
  "#6f3f3c", // Exemplo de cor7
  "#ffcccb", // Light Red
  "#add8e6", // Light Blue
  "#90ee90", // Light Green
  "#ffb6c1", // Light Pink
  "#ffa07a", // Light Salmon
  "#c6fde7", // Light Green
  "#f0e68c", // Light Yellow
  "#dda0dd", // Light Purple
  "#f0f0f0", // Light Gray
  "#ff6347", // Tomato
  "#4682b4", // Steel Blue
  "#ffd700", // Gold
  "#ff69b4", // Hot Pink
  "#8a2be2", // Blue Violet
  "#20b2aa", // Light Sea Green
  "#ff4500", // Orange Red
  "#da70d6", // Orchid
  "#7fff00", // Chartreuse
  "#dcdcdc", // Gainsboro
  "#3d3d3d", // Dark Gray
  "#123456", // Dark Blue
  "#A48460", // Brownish
];

interface ColorToolbarProps {
  onColorSelect: (color: string) => void;
  selectedCategory: string;
  currentColor: string;
}

const ColorToolbar: React.FC<ColorToolbarProps> = ({
  onColorSelect,
  selectedCategory,
  currentColor,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(currentColor);

  // Atualiza a cor selecionada quando a categoria muda
  useEffect(() => {
    setSelectedColor(currentColor);
  }, [currentColor, selectedCategory]);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color); // Retorna o hex da cor selecionada
  };

  // Mapeamento de nomes de categorias para labels em português
  const categoryLabels: { [key: string]: string } = {
    body: "Pele",
    clothes: "Corpo",
    skin: "Pele", // Mesmo label que body pois são sincronizados
    affection: "Afeição",
    moustache: "Barba",
    hair: "Cabelo",
    adornment: "Adereços",
    hat: "Chapéu",
    backgroud: "Fundo",
  };

  return (
    <div style={{ padding: "10px" }}>
      {/* Indicador da categoria atual */}
      <div
        style={{
          marginBottom: "15px",
          padding: "8px 12px",
          backgroundColor: "#f5f5f5",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Editando cor de:{" "}
          <span style={{ color: "#3f85a7" }}>
            {categoryLabels[selectedCategory] || selectedCategory}
          </span>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "4px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Cor atual:</span>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: currentColor,
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <span
            style={{ fontSize: "12px", color: "#666", fontFamily: "monospace" }}
          >
            {currentColor}
          </span>
        </div>
      </div>

      {/* Paleta de cores */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignContent: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {colors.map((color) => (
          <div
            key={color}
            style={{
              border:
                selectedColor === color
                  ? "3px solid #3f85a7"
                  : "2px solid #424c50",
              cursor: "pointer",
              backgroundColor:
                selectedColor === color ? "#e8f4f8" : "transparent",
              borderRadius: "10px",
              padding: selectedColor === color ? "3px" : "4px",
              transition: "all 0.2s ease",
            }}
          >
            <div
              onClick={() => handleColorClick(color)}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: color,
                borderRadius: "8px",
                boxShadow:
                  selectedColor === color
                    ? "0 2px 8px rgba(63, 133, 167, 0.3)"
                    : "none",
                transition: "all 0.2s ease",
              }}
              title={`Aplicar cor ${color} em ${
                categoryLabels[selectedCategory] || selectedCategory
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorToolbar;
