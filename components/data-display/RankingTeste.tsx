"use client";

import React from "react";
import Image from "next/image"; // Importando o componente otimizado do Next.js
import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Chip,
  useTheme,
} from "@mui/material";

interface RankingItem {
  name: string;
  rank: number;
  points: number;
  avatar: string;
}

export default function RankingTeste({ items }: { items: RankingItem[] }) {
  const theme = useTheme();

  // Funções auxiliares
  const getMedalImage = (position: number) =>
    ({
      1: "/medalhas/ouro.png",
      2: "/medalhas/prata.png",
      3: "/medalhas/bronze.png",
    }[position]);

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const getAvatarColor = (initial: string) => {
    const charCode = initial.charCodeAt(0);
    const hue = (charCode * 137) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 500, md: 600 }, // Responsivo para diferentes telas
        margin: "auto",
        p: 2,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: theme.shadows[2],
        transition: "background-color 0.3s ease, color 0.3s ease",
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100vh - 8rem)", // Evita que ultrapasse a tela
        overflowY: "auto",
        paddingBottom: "6rem",
      }}
        >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.primary,
        }}
      >
        🏆 Ranking de Pontuação
      </Typography>

      <List dense>
        {items.map((item, index) => (
          <div key={item.rank}>
            <ListItem
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "center",
                paddingLeft: 0,
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
                boxShadow: theme.shadows[1],
                transition: "background-color 0.3s ease",
              }}
            >
              {/* Medalha/Posição com <Image> otimizado */}
              <ListItemAvatar
                sx={{
                  minWidth: "80px",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "16px",
                }}
              >
                {item.rank <= 3 ? (
                  <Image
                    src={getMedalImage(item.rank)!}
                    alt={`Medalha ${item.rank}`}
                    width={50}
                    height={50}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color:
                        item.rank >= 4 && item.rank <= 10
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                    }}
                  >
                    {item.rank}
                  </Typography>
                )}
              </ListItemAvatar>

              {/* Avatar com Cor Dinâmica */}
              <ListItemAvatar sx={{ minWidth: "60px" }}>
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    boxShadow: theme.shadows[3],
                    border: `2px solid ${theme.palette.divider}`,
                    backgroundColor: getAvatarColor(getInitial(item.name)),
                    fontSize: "1.5rem",
                    color: theme.palette.getContrastText(
                      getAvatarColor(getInitial(item.name))
                    ),
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {getInitial(item.name)}
                </Avatar>
              </ListItemAvatar>

              {/* Nome e Pontos */}
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexGrow: 1,
                      ml: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        whiteSpace: "nowrap",  // Evita quebra de linha
                        overflow: "hidden",     // Esconde o texto que ultrapassar o espaço
                        textOverflow: "ellipsis", // Adiciona "..."
                        maxWidth: "150px", // Define um limite para o texto
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Chip
                      label={`${item.points.toLocaleString('pt-BR')} pts`}
                      sx={{
                        fontWeight: "bold",
                        minWidth: 100,
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        border: `1px solid ${theme.palette.primary.dark}`,
                        boxShadow: theme.shadows[1],
                      }}
                    />
                  </Box>
                }
              />
            </ListItem>

            {/* Zona de Conduta com <Image> otimizado */}
            {index === 9 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  my: 3,
                  py: 2,
                  backgroundColor: theme.palette.secondary.light,
                  borderRadius: 2,
                  boxShadow: theme.shadows[2],
                }}
              >
                <Image
                  src="/conduta.png"
                  alt="Ícone de Conduta"
                  width={40}
                  height={40}
                  style={{ marginRight: 16 }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.secondary.contrastText,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Zona de Conduta
                </Typography>

                <Image
                  src="/conduta.png"
                  alt="Ícone de Conduta"
                  width={40}
                  height={40}
                  style={{ marginLeft: 16 }}
                />
              </Box>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
}
