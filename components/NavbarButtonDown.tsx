"use client";

import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  HomeOutlined,
  PersonOutlined,
  QuestionAnswerOutlined,
  CameraAltOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const NavbarButtonDown = () => {
  const theme = useTheme(); // Hook para acessar o tema
  const router = useRouter(); // Hook para navegação
  // Estado para controlar o ícone ativo
  const [activeIndex, setActiveIndex] = useState(2);

  // Lista de ícones com suas respectivas rotas
  const icons = [
    { icon: <PersonOutlined />, label: "Profile", route: "/ranking" },
    { icon: <QuestionAnswerOutlined />, label: "Messages", route: "/ranking" },
    { icon: <HomeOutlined />, label: "Home", route: "/ranking" },
    { icon: <CameraAltOutlined />, label: "Photos", route: "/ranking" },
    { icon: <SettingsOutlined />, label: "Settings", route: "/ranking" },
  ];

  // Posições personalizadas do círculo vermelho para cada ícone
  const positions = ["10%", "30%", "50%", "70%", "89%"];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "flex", sm: "none" }, // Apenas em telas pequenas
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
        borderTopLeftRadius: "0.75rem",
        borderTopRightRadius: "0.75rem",
        height: "4rem",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.19)",
        zIndex: 1000,
      }}
    >
      {/* Círculo personalizado */}
      <Box
        sx={{
          position: "absolute",
          top: "-2.1rem", // Ajuste de altura
          left: positions[activeIndex], // Posição personalizada
          transform: "translateX(-50%)",
          width: "3.9rem", // Tamanho aumentado
          height: "3.9rem",
          backgroundColor: theme.palette.primary.dark,
          borderRadius: "50%",
          border: `6px solid ${theme.palette.background.default}`, // Borda grossa com a cor de fundo
          transition: "left 0.3s ease, top 0.3s ease",
        }}
      />

      {/* Ícones do menu */}
      {icons.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => {
              setActiveIndex(index);
              router.push(item.route);
            }}
            sx={{
              color:
                activeIndex === index
                  ? theme.palette.primary.light
                  : theme.palette.text.secondary,
              position: "relative",
              transition: "all 0.3s ease",
              transform:
                activeIndex === index ? "translateY(-1.9rem)" : "translateY(0)", // Ícone sobe mais
            }}
          >
            {item.icon}
          </IconButton>
          {activeIndex === index && (
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: theme.palette.primary.contrastText,
                marginTop: "-0.5rem",
                opacity: 0,
                transform: "translateY(1rem)",
                transition: "all 0.3s ease",
                position: "relative",
                animation: "slideUp 1.0s forwards",
                "@keyframes slideUp": {
                  from: { opacity: 0, transform: "translateY(1rem)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              {item.label}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default NavbarButtonDown;
