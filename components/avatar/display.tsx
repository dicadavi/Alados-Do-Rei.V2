import * as React from "react";
import PageDefault from "@/components/layout/PageDefault";
import { Box } from "@mui/material";
import {
  Affection,
  Body,
  Hair,
  Hat,
  Adornment,
  Moustache,
  Skin,
  Nose,
} from "@/lib/avatar";

// Definindo as tipagens para as props de cada componente
interface SkinProps {
  rootcolor: string;
}

interface BodyProps {
  id: string;
  rootcolor: string;
}

interface AffectionProps {
  id: string;
  rootcolor: string;
}

interface MoustacheProps {
  id: string;
  rootcolor: string;
}

interface HairProps {
  id: string;
  rootcolor: string;
}

interface NoseProps {
  id: string;
}

interface AdornmentProps {
  id: string;
  rootcolor: string;
}

interface HatProps {
  id: string;
  rootcolor: string;
}

// Atualizando a interface ProfileProps
interface ProfileProps {
  skin: SkinProps;
  body: BodyProps;
  affection?: AffectionProps;
  moustache?: MoustacheProps;
  hair?: HairProps;
  nose: NoseProps;
  adornment?: AdornmentProps;
  hat?: HatProps;
  showSkin?: boolean;
  showBody?: boolean;
  showAffection?: boolean;
  showMoustache?: boolean;
  showHair?: boolean;
  showNose?: boolean;
  showAdornment?: boolean;
  showHat?: boolean;
}

export default async function Profile({
  skin,
  body,
  affection,
  moustache,
  hair,
  nose,
  adornment,
  hat,
  showSkin = true,
  showBody = true,
  showAffection = true,
  showMoustache = true,
  showHair = true,
  showNose = true,
  showAdornment = true,
  showHat = true,
}: ProfileProps) {
  return (
    <PageDefault>
      <Box>
        <Box
          sx={{
            position: "relative",
            width: "100px",
            height: "100px",
          }}
        >
          {showSkin && skin && (
            <Skin
              id={"skin" + body?.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootcolor={skin.rootcolor}
            />
          )}
          {showBody && body && (
            <Body
              id={"body" + body.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootcolor={body.rootcolor}
            />
          )}
          {showAffection && affection && (
            <Affection
              id={"affection" + affection.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootcolor={affection.rootcolor}
              gradientcolor={skin.rootcolor}
            />
          )}
          {showHair && hair && !showHat && (
            <Hair
              id={"hair" + hair.id}
              rootcolor={hair.rootcolor}
              gradientcolor={skin.rootcolor}
              width={400}
              height={400}
              className="absolute top-0 left-0"
            />
          )}
          {showMoustache && moustache && (
            <Moustache
              id={"moustache" + moustache.id}
              width={400}
              height={400}
              rootcolor={moustache.rootcolor}
              gradientcolor={skin.rootcolor}
              className="absolute top-0 left-0"
            />
          )}
          {showNose && nose && (
            <Nose
              id={"nose" + nose.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootcolor={skin.rootcolor}
            />
          )}
          {showAdornment && adornment && (
            <Adornment
              id={"adornment" + adornment.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootcolor={adornment.rootcolor}
            />
          )}
          {showHat && hat && (
            <Hat
              id={"hat" + hat.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootcolor={hat.rootcolor}
            />
          )}
        </Box>
      </Box>
    </PageDefault>
  );
}
