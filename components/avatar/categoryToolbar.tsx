import React, { useState } from "react";
import { Tabs, Tab, Tooltip } from "@mui/material";
import { Category } from "@/lib/avatar";

const CategoryToolbar: React.FC<{
  onCategorySelect: (category: string) => void;
}> = ({ onCategorySelect }) => {
  const [value, setValue] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Definindo as categorias como um array de objetos com id, label e rootcolor
  const categories = [
    { id: "adornment", label: "Adereços", rootcolor: "#52656D" },
    { id: "affection", label: "Afeição", rootcolor: "#52656D" },
    { id: "backgroud", label: "Fundo", rootcolor: "#52656D" },
    { id: "body", label: "Corpo", rootcolor: "#52656D" },
    { id: "clothes", label: "Roupa", rootcolor: "#52656D" },
    { id: "hair", label: "Cabelo", rootcolor: "#52656D" },
    { id: "hat", label: "Chapéu", rootcolor: "#52656D" },
    { id: "moustache", label: "Barba", rootcolor: "#52656D" },
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
        // scrollButtons="auto"
      >
        {categories.map((category, index) => (
          <Tooltip title={category.label} key={category.id}>
            <Tab
              style={{
                borderBottom: "2px solid #424c50",
              }}
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
              sx={{ padding: "4px 8px", minWidth: "63px" }}
            />
          </Tooltip>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryToolbar;
