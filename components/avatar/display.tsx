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
  rootColor: string;
}

interface BodyProps {
  id: string;
  rootColor: string;
}

interface AffectionProps {
  id: string;
  rootColor: string;
}

interface MoustacheProps {
  id: string;
  rootColor: string;
}

interface HairProps {
  id: string;
  rootColor: string;
}

interface NoseProps {
  id: string;
}

interface AdornmentProps {
  id: string;
  rootColor: string;
}

interface HatProps {
  id: string;
  rootColor: string;
}

// Atualizando a interface ProfileProps
interface ProfileProps {
  skin: SkinProps;
  body: BodyProps;
  affection?: AffectionProps;
  moustache?: MoustacheProps;
  hair?: HairProps;
  nose?: NoseProps;
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
              rootColor={skin.rootColor}
            />
          )}
          {showBody && body && (
            <Body
              id={"body" + body.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootColor={body.rootColor}
            />
          )}
          {showAffection && affection && (
            <Affection
              id={"affection" + affection.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootColor={affection.rootColor}
            />
          )}
          {showHair && hair && (
            <Hair
              id={"hair" + hair.id}
              rootColor={hair.rootColor}
              gradientColor={skin.rootColor}
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
              rootColor={moustache.rootColor}
              gradientColor={skin.rootColor}
              className="absolute top-0 left-0"
            />
          )}
          {showNose && nose && (
            <Nose
              id={"nose" + nose.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootColor={skin.rootColor}
            />
          )}
          {showAdornment && adornment && (
            <Adornment
              id={"adornment" + adornment.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootColor={adornment.rootColor}
            />
          )}
          {showHat && hat && (
            <Hat
              id={"hat" + hat.id}
              width={400}
              height={400}
              className="absolute top-0 left-0"
              rootColor={hat.rootColor}
            />
          )}
        </Box>
      </Box>
    </PageDefault>
  );
}
