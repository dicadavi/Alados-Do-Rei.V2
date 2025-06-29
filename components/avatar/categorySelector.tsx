import React from "react";
import { Typography, Grid, Box, Card, CardContent } from "@mui/material";
import Profile from "./display";

// Definindo os tipos disponíveis para cada categoria
const AVAILABLE_TYPES = {
  body: ["1", "2", "3", "4", "5", "6"],
  hair: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
  ],
  hat: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  affection: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
  ],
  moustache: ["0", "1", "2", "3", "4", "5", "6"],
  adornment: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ],
};

const CATEGORY_LABELS = {
  body: "Corpo",
  hair: "Cabelo",
  hat: "Chapéu",
  affection: "Expressão",
  moustache: "Barba",
  adornment: "Adereços",
};

// Mapeamento das categorias do CategoryToolbar para as categorias dos tipos
const CATEGORY_MAPPING = {
  body: "body", // "Pele" -> body types
  clothes: "body", // "Corpo" -> body types (mesmo resultado)
  skin: "body", // skin não tem tipos próprios, usa body
  affection: "affection",
  moustache: "moustache",
  hair: "hair",
  adornment: "adornment",
  hat: "hat",
  backgroud: null, // background não tem tipos
};

// Categorias que podem ter a opção "Sem"
const OPTIONAL_CATEGORIES = ["moustache", "hat", "adornment"];

interface CategoryColors {
  body: string;
  clothes: string;
  skin: string;
  affection: string;
  moustache: string;
  hair: string;
  adornment: string;
  hat: string;
  backgroud: string;
}

interface SelectedTypes {
  body: string;
  hair: string;
  hat: string;
  affection: string;
  moustache: string;
  adornment: string;
}

interface ElementVisibility {
  moustache: boolean;
  hat: boolean;
  adornment: boolean;
}

interface CategorySelectorProps {
  selectedTypes: SelectedTypes;
  onTypeSelect: (category: keyof SelectedTypes, typeId: string) => void;
  categoryColors: CategoryColors;
  currentCategory: keyof CategoryColors;
  elementVisibility: ElementVisibility;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedTypes,
  onTypeSelect,
  categoryColors,
  currentCategory,
  elementVisibility,
}) => {
  // Mapear a categoria atual para a categoria de tipos correspondente
  const mappedCategory = CATEGORY_MAPPING[currentCategory];

  // Se a categoria não tem tipos (como background), não renderizar nada
  if (
    !mappedCategory ||
    !AVAILABLE_TYPES[mappedCategory as keyof typeof AVAILABLE_TYPES]
  ) {
    return (
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Esta categoria não possui tipos diferentes para selecionar.
        </Typography>
      </Box>
    );
  }

  const categoryKey = mappedCategory as keyof SelectedTypes;
  const types = AVAILABLE_TYPES[categoryKey];
  const categoryLabel = CATEGORY_LABELS[categoryKey];
  const isOptionalCategory = OPTIONAL_CATEGORIES.includes(categoryKey);

  // Função para verificar se um tipo está selecionado
  const isSelected = (typeId: string) => {
    if (typeId === "0") {
      // Para "Sem", verificar se o elemento está invisível
      if (isOptionalCategory && categoryKey in elementVisibility) {
        return !elementVisibility[categoryKey as keyof ElementVisibility];
      }
    }
    return selectedTypes[categoryKey] === typeId;
  };

  // Função para obter o label do tipo
  const getTypeLabel = (typeId: string) => {
    if (typeId === "0") {
      return "Sem";
    }
    return `${categoryLabel} ${typeId}`;
  };

  return (
    <Box>
      {/* Título da seção */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "600",
          marginBottom: "16px",
          padding: "0 10px",
          borderBottom: "2px solid #e0e0e0",
          paddingBottom: "8px",
        }}
      >
        Tipos de {categoryLabel}
      </Typography>

      {/* Grid de cards */}
      <Grid container spacing={2} sx={{ padding: "0 6px" }}>
        {types.map((typeId) => {
          const isTypeSelected = isSelected(typeId);

          return (
            <Grid item xs={6} sm={4} md={3} key={typeId}>
              <Card
                onClick={() => onTypeSelect(categoryKey, typeId)}
                sx={{
                  cursor: "pointer",
                  border: isTypeSelected
                    ? "3px solid #3f85a7"
                    : "2px solid #424c50",
                  backgroundColor: isTypeSelected ? "#e8f4f8" : "transparent",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#3f85a7",
                    backgroundColor: "#f0f8ff",
                  },
                }}
              >
                <CardContent sx={{ padding: "8px !important" }}>
                  <Box
                    sx={{
                      height: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#2a3942",
                      borderRadius: "8px",
                    }}
                  >
                    {typeId === "0" ? (
                      // Card "Sem" - mostrar apenas um X ou texto
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#666",
                            fontWeight: "300",
                          }}
                        >
                          ✕
                        </Typography>
                      </Box>
                    ) : (
                      // Cards normais com preview
                      <Profile
                        height={100}
                        width={100}
                        categoryColors={categoryColors}
                        body={{
                          id:
                            categoryKey === "body"
                              ? typeId
                              : selectedTypes.body,
                        }}
                        affection={{
                          id:
                            categoryKey === "affection"
                              ? typeId
                              : selectedTypes.affection,
                        }}
                        moustache={{
                          id:
                            categoryKey === "moustache"
                              ? typeId
                              : selectedTypes.moustache,
                        }}
                        hair={{
                          id:
                            categoryKey === "hair"
                              ? typeId
                              : selectedTypes.hair,
                        }}
                        nose={{ id: "1" }}
                        adornment={{
                          id:
                            categoryKey === "adornment"
                              ? typeId
                              : selectedTypes.adornment,
                        }}
                        hat={{
                          id:
                            categoryKey === "hat" ? typeId : selectedTypes.hat,
                        }}
                        showSkin={true}
                        showBody={true}
                        showAffection={categoryKey === "affection"}
                        showMoustache={categoryKey === "moustache"}
                        showHair={
                          categoryKey === "hair" || categoryKey !== "hat"
                        }
                        showNose={true}
                        showAdornment={categoryKey === "adornment"}
                        showHat={categoryKey === "hat"}
                        backgroud={{
                          props: {
                            backgroundColor: categoryColors.backgroud,
                          },
                        }}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "8px",
                      fontWeight: isTypeSelected ? "600" : "400",
                      color: isTypeSelected ? "#3f85a7" : "#666",
                    }}
                  >
                    {getTypeLabel(typeId)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategorySelector;
