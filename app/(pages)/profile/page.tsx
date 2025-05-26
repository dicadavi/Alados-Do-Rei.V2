"use client";

import * as React from "react";
import { useState } from "react";
import Profile from "@/components/avatar/display";
import ColorToolbar from "@/components/avatar/colorToolbar";
import CategoryToolbar from "@/components/avatar/categoryToolbar";
import { Grid } from "@mui/material";
import PageDefault from "@/components/layout/PageDefault";

export default function ProfilePage() {
  const [color, setColor] = useState("#6f3f3c");
  const [category, setCategory] = useState("body"); //TODO: Criar opções de cores com base na categoria

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
            skin={{ rootcolor: color }}
            body={{ id: "6" }}
            affection={{ id: "23", rootcolor: "#123456" }}
            moustache={{ id: "6", rootcolor: "#3d3d3d" }}
            hair={{ id: "72", rootcolor: "#249472" }}
            nose={{ id: "1" }}
            adornment={{ id: "1", rootcolor: "#A48460" }}
            hat={{ id: "3", rootcolor: "#249472" }}
            showSkin={true}
            showBody={true}
            showAffection={true}
            showMoustache={false}
            showHair={true}
            showNose={true}
            showAdornment={true}
            showHat={true}
            backgroud={{
              rootcolor: "#c6fde7",
              props: {
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                borderTopRightRadius: { xs: "10px", md: "0" },
                borderBottomRightRadius: { xs: "10px", md: "0" },
                backgroundColor: "#c6fde7",
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
          <ColorToolbar onColorSelect={setColor} />
        </Grid>
      </Grid>
    </PageDefault>
  );
}
