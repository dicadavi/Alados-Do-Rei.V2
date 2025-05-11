import * as React from "react";
import PageDefault from "@/components/layout/PageDefault";
import { Box } from "@mui/material";
import { Affection, Body, Hair, Hat, Moustache } from "@/lib/avatar";

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
            id="body1"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
          <Affection
            id="affection24"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
          <Hair
            id="hair40"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
          <Moustache
            id="moustache2"
            width={400}
            height={400}
            className="absolute top-0 left-0"
          />
        </Box>
      </Box>
    </PageDefault>
  );
}
