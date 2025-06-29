"use client";

import * as React from "react";
import { useState } from "react";
import Profile from "@/components/avatar/display";
import ColorToolbar from "@/components/avatar/colorToolbar";
import CategoryToolbar from "@/components/avatar/categoryToolbar";
import { Grid } from "@mui/material";
import PageDefault from "@/components/layout/PageDefault";

// Definindo o tipo para as cores por categoria
interface CategoryColors {
  body: string; // Categoria "Pele" - controla a cor da skin
  clothes: string; // Categoria "Corpo" - controla a cor do body
  skin: string; // Mantém para gradientes e outras funcionalidades
  affection: string;
  moustache: string;
  hair: string;
  adornment: string;
  hat: string;
  backgroud: string;
}

export default function ProfilePage() {
  // Estado com cores específicas para cada categoria
  const [categoryColors, setCategoryColors] = useState<CategoryColors>({
    body: "#6f3f3c", // Categoria "Pele"
    clothes: "#45a1cd", // Categoria "Corpo"
    skin: "#ffe2d6", // Para gradientes
    affection: "#123456",
    moustache: "#3d3d3d",
    hair: "#249472",
    adornment: "#A48460",
    hat: "#249472",
    backgroud: "#c6fde7",
  });

  const [category, setCategory] = useState<keyof CategoryColors>("body");

  // Função para atualizar a cor de uma categoria específica
  const handleColorSelect = (color: string) => {
    setCategoryColors((prev) => {
      const newColors = {
        ...prev,
        [category]: color,
      };

      // Sincronizar: quando "body" (Pele) muda, atualiza skin para gradientes
      if (category === "body") {
        newColors.skin = color;
      }

      return newColors;
    });
  };

  return (
    <PageDefault>
      <Grid container spacing={0} marginTop="100px">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            border: "2px solid #424c50",
            borderRight: { xs: "2px solid #424c50", md: "none" },
            borderTopRightRadius: { xs: "12px", md: "0" },
            borderBottomRightRadius: { xs: "12px", md: "0" },
          }}
        >
          <Profile
            height={300}
            categoryColors={categoryColors}
            body={{ id: "6" }}
            affection={{ id: "23" }}
            moustache={{ id: "6" }}
            hair={{ id: "72" }}
            nose={{ id: "1" }}
            adornment={{ id: "1" }}
            hat={{ id: "3" }}
            showSkin={true}
            showBody={true}
            showAffection={true}
            showMoustache={false}
            showHair={true}
            showNose={true}
            showAdornment={true}
            showHat={true}
            backgroud={{
              props: {
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                borderTopRightRadius: { xs: "10px", md: "0" },
                borderBottomRightRadius: { xs: "10px", md: "0" },
                backgroundColor: categoryColors.backgroud,
              },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            border: "2px solid #424c50",
            borderLeft: { xs: "2px solid #424c50", md: "none" },
            borderTopLeftRadius: { xs: "12px", md: "0" },
            borderBottomLeftRadius: { xs: "12px", md: "0" },
            marginTop: { xs: "20px", md: "0" },
            padding: { xs: "0 0 20px 0", md: "0" },
          }}
        >
          <CategoryToolbar onCategorySelect={setCategory} />
          <ColorToolbar
            onColorSelect={handleColorSelect}
            selectedCategory={category}
            currentColor={categoryColors[category]}
          />
        </Grid>
      </Grid>
    </PageDefault>
  );
}
