import * as React from "react";
import PageDefault from "@/components/layout/PageDefault";
import { Box } from "@mui/material";
import { Affection, Body, Hair, Hat, Moustache, Skin } from "@/lib/avatar";

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
          <Skin
            id="skin6"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
          <Body
            id="body6"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
          <Hair
            id="hair12"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
          <Affection
            id="affection50"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
          <Moustache
            id="moustache3"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
        </Box>
      </Box>
    </PageDefault>
  );
}
