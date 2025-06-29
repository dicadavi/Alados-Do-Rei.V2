"use client";

import * as React from "react";
import { useState } from "react";
import Profile from "@/components/avatar/display";
import ColorToolbar from "@/components/avatar/colorToolbar";
import CategoryToolbar from "@/components/avatar/categoryToolbar";
import CategorySelector from "@/components/avatar/categorySelector";
import { Grid, Box } from "@mui/material";
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

// Definindo o tipo para os tipos selecionados de cada categoria
interface SelectedTypes {
  body: string;
  hair: string;
  hat: string;
  affection: string;
  moustache: string;
  adornment: string;
}

// Definindo o tipo para controlar a visibilidade dos elementos opcionais
interface ElementVisibility {
  moustache: boolean;
  hat: boolean;
  adornment: boolean;
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

  // Estado com tipos selecionados para cada categoria
  const [selectedTypes, setSelectedTypes] = useState<SelectedTypes>({
    body: "4",
    hair: "72",
    hat: "3",
    affection: "23",
    moustache: "6",
    adornment: "1",
  });

  // Estado para controlar a visibilidade dos elementos opcionais
  const [elementVisibility, setElementVisibility] = useState<ElementVisibility>(
    {
      moustache: false, // Começar sem bigode
      hat: true, // Começar com chapéu
      adornment: true, // Começar com adereços
    }
  );

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

  // Função para atualizar o tipo selecionado de uma categoria
  const handleTypeSelect = (
    categoryType: keyof SelectedTypes,
    typeId: string
  ) => {
    // Se selecionou "sem" (typeId === "0"), ocultar o elemento
    if (typeId === "0") {
      if (
        categoryType === "moustache" ||
        categoryType === "hat" ||
        categoryType === "adornment"
      ) {
        setElementVisibility((prev) => ({
          ...prev,
          [categoryType]: false,
        }));
      }
    } else {
      // Se selecionou um tipo válido, mostrar o elemento
      if (
        categoryType === "moustache" ||
        categoryType === "hat" ||
        categoryType === "adornment"
      ) {
        setElementVisibility((prev) => ({
          ...prev,
          [categoryType]: true,
        }));
      }

      setSelectedTypes((prev) => ({
        ...prev,
        [categoryType]: typeId,
      }));
    }
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
            height={500}
            categoryColors={categoryColors}
            body={{ id: selectedTypes.body }}
            affection={{ id: selectedTypes.affection }}
            moustache={{ id: selectedTypes.moustache }}
            hair={{ id: selectedTypes.hair }}
            nose={{ id: "1" }}
            adornment={{ id: selectedTypes.adornment }}
            hat={{ id: selectedTypes.hat }}
            showSkin={true}
            showBody={true}
            showAffection={true}
            showMoustache={elementVisibility.moustache}
            showHair={true}
            showNose={true}
            showAdornment={elementVisibility.adornment}
            showHat={elementVisibility.hat}
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
            maxHeight: "500px",
            overflowY: "auto",
          }}
        >
          {/* Seletor de Categoria */}
          <CategoryToolbar onCategorySelect={setCategory} />

          {/* Seletor de Cores */}
          <ColorToolbar
            onColorSelect={handleColorSelect}
            selectedCategory={category}
            currentColor={categoryColors[category]}
          />

          {/* Seletor de Tipos - baseado na categoria atual */}
          <Box sx={{ padding: "10px" }}>
            <CategorySelector
              selectedTypes={selectedTypes}
              onTypeSelect={handleTypeSelect}
              categoryColors={categoryColors}
              currentCategory={category}
              elementVisibility={elementVisibility}
            />
          </Box>
        </Grid>
      </Grid>
    </PageDefault>
  );
}
