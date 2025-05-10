import * as React from "react";
import PageDefault from "@/components/layout/PageDefault";
import { Box } from "@mui/material";
import { AvatarDisplay } from "@/components/avatar/display";
import { Affection, Body, Hat } from "@/lib/avatar";

const position = {
  top: 0,
  left: 0,
  absolute: true,
};

export default async function Profile() {
  return (
    <PageDefault>
      <Box>
        {/* <AvatarDisplay className="sua-classe-adicional" /> */}
        <Box
          sx={{
            position: "relative",
            width: "100px",
            height: "100px",
          }}
        >
          <Body
            id="thin"
            width={100}
            height={100}
            className="absolute top-0 left-0"
          />
          <Affection
            id="default"
            width={100}
            height={100}
            className="absolute top-0 left-0"
          />
        </Box>
      </Box>
    </PageDefault>
  );
}
