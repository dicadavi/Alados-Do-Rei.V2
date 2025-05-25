"use client";

import * as React from "react";
import { useState } from "react";
import Profile from "@/components/avatar/display";
import ColorToolbar from "@/components/avatar/colorToolbar";
import { Grid } from "@mui/material";
import PageDefault from "@/components/layout/PageDefault";

export default function ProfilePage() {
  const [color, setColor] = useState("#6f3f3c");

  return (
    <PageDefault props={{ border: "2px solid orange" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ border: "2px solid green" }}>
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
            backgroud={{ rootcolor: "#c6fde7" }}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ border: "2px solid blue" }}>
          <ColorToolbar onColorSelect={setColor} />
        </Grid>
      </Grid>
    </PageDefault>
  );
}
