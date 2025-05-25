import React, { useState } from "react";

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

  // Adicione mais cores conforme necessário
];

const ColorToolbar: React.FC<{ onColorSelect: (color: string) => void }> = ({
  onColorSelect,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color); // Retorna o hex da cor selecionada
  };

  return (
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
                ? "2px solid #3f85a7"
                : "2px solid #424c50",
            cursor: "pointer",
            backgroundColor:
              selectedColor === color ? "#202f36" : "transparent",
            borderRadius: "10px",
            padding: "4px",
          }}
        >
          <div
            onClick={() => handleColorClick(color)}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: color,
              borderRadius: "10px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorToolbar;
