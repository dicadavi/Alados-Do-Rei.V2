import React, { useState } from "react";
import { Tabs, Tab, Tooltip } from "@mui/material";
import { Category } from "@/lib/avatar";

// Definindo o tipo para as categorias
type CategoryType =
  | "body"
  | "clothes"
  | "skin"
  | "affection"
  | "moustache"
  | "hair"
  | "adornment"
  | "hat"
  | "backgroud";

interface CategoryToolbarProps {
  onCategorySelect: (category: CategoryType) => void;
}

const CategoryToolbar: React.FC<CategoryToolbarProps> = ({
  onCategorySelect,
}) => {
  const [value, setValue] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Definindo as categorias como um array de objetos com id, label e rootcolor
  const categories: Array<{
    id: CategoryType;
    label: string;
    rootcolor: string;
  }> = [
    { id: "body", label: "Corpo", rootcolor: "#52656D" },
    { id: "clothes", label: "Roupa", rootcolor: "#52656D" },
    { id: "affection", label: "Expressão	", rootcolor: "#52656D" },
    { id: "moustache", label: "Barba ou Bigode", rootcolor: "#52656D" },
    { id: "hair", label: "Cabelo", rootcolor: "#52656D" },
    { id: "adornment", label: "Acessórios", rootcolor: "#52656D" },
    { id: "hat", label: "Chapéu", rootcolor: "#52656D" },
    { id: "backgroud", label: "Fundo", rootcolor: "#52656D" },
  ];

  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: number
  ) => {
    setValue(newValue);
    onCategorySelect(categories[newValue].id);
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          borderBottom: "2px solid #424c50",
          "& .MuiTabs-indicator": {
            backgroundColor: "#3f85a7",
            height: "3px",
          },
        }}
      >
        {categories.map((category, index) => (
          <Tooltip title={category.label} key={category.id}>
            <Tab
              label={Category({
                id: category.id,
                rootcolor:
                  value === index || hoveredIndex === index
                    ? "#49C0F8"
                    : category.rootcolor,
              })}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleChange(null, index)}
              sx={{
                padding: "4px 8px",
                minWidth: "63px",
                "&.Mui-selected": {
                  color: "#3f85a7",
                  fontWeight: "600",
                },
              }}
            />
          </Tooltip>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryToolbar;
