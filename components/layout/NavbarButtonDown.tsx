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
  const theme = useTheme();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(2);

  const icons = [
    { icon: <PersonOutlined />, label: "Profile", route: "/profile" },
    { icon: <QuestionAnswerOutlined />, label: "Messages", route: "/ranking" },
    { icon: <HomeOutlined />, label: "Home", route: "/home" },
    { icon: <CameraAltOutlined />, label: "Photos", route: "/ranking" },
    {
      icon: <SettingsOutlined />,
      label: "Settings",
      route: "/protected/points",
    },
  ];

  const positions = ["10%", "30%", "50%", "70%", "90%"];

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "flex", sm: "none" },
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        borderTopLeftRadius: "0.75rem",
        borderTopRightRadius: "0.75rem",
        height: "4rem",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 -2px 10px rgba(0, 0, 0, 0.7)"
            : "0 -2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      {/* Círculo personalizado que muda conforme o tema */}
      <Box
        sx={{
          position: "absolute",
          top: "-2.1rem",
          left: positions[activeIndex],
          transform: "translateX(-50%)",
          width: "3.9rem",
          height: "3.9rem",
          background:
            theme.palette.mode === "dark"
              ? `linear-gradient(to bottom, #090e10, ${theme.palette.primary.dark})`
              : `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
          borderRadius: "50%",
          border: `6px solid ${
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.grey[100]
          }`,
          transition: "left 0.3s ease, background-color 0.3s ease",
        }}
      />

      {/* Ícones do menu que mudam de cor conforme o tema */}
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
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.secondary,
              position: "relative",
              transition: "all 0.3s ease",
              transform:
                activeIndex === index ? "translateY(-1.9rem)" : "translateY(0)",
            }}
          >
            {item.icon}
          </IconButton>
          {activeIndex === index && (
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: theme.palette.text.primary,
                marginTop: "-0.5rem",
                opacity: 0,
                transform: "translateY(1rem)",
                transition: "all 0.3s ease",
                position: "relative",
                animation: "slideUp 0.5s forwards",
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
