import * as React from "react";
import { Box, SxProps } from "@mui/material";
import {
  Affection,
  Body,
  Hair,
  Hat,
  Adornment,
  Moustache,
  Skin,
  Nose,
  BackGroud,
} from "@/lib/avatar";

// Definindo o tipo para as cores por categoria
interface CategoryColors {
  body: string; // Categoria "Pele" - controla a cor da skin
  clothes: string; // Categoria "Corpo" - controla a cor do body
  skin: string; // Mantém para gradientes e outras funcionalidades
  affection: string;
  moustache: string;
  hair: string;
  adornment: string;
  hat: string;
  backgroud: string;
}

// Definindo as tipagens para as props de cada componente
interface BackGroudProps {
  props?: SxProps;
}

interface BodyProps {
  id: string;
}

interface AffectionProps {
  id: string;
}

interface MoustacheProps {
  id: string;
}

interface HairProps {
  id: string;
}

interface NoseProps {
  id: string;
}

interface AdornmentProps {
  id: string;
}

interface HatProps {
  id: string;
}

// Atualizando a interface ProfileProps
interface ProfileProps {
  categoryColors: CategoryColors;
  body: BodyProps;
  affection?: AffectionProps;
  moustache?: MoustacheProps;
  hair?: HairProps;
  nose: NoseProps;
  adornment?: AdornmentProps;
  hat?: HatProps;
  backgroud?: BackGroudProps;
  showSkin?: boolean;
  showBody?: boolean;
  showAffection?: boolean;
  showMoustache?: boolean;
  showHair?: boolean;
  showNose?: boolean;
  showAdornment?: boolean;
  showHat?: boolean;
  width?: number;
  height?: number;
}

export default function Profile({
  categoryColors,
  body,
  affection,
  moustache,
  hair,
  nose,
  adornment,
  hat,
  backgroud,
  showSkin = true,
  showBody = true,
  showAffection = true,
  showMoustache = true,
  showHair = true,
  showNose = true,
  showAdornment = true,
  showHat = true,
  width,
  height,
}: ProfileProps) {
  return (
    <Box
      width={width ? `${width}px` : "100%"}
      height={height ? `${height}px` : "100%"}
      position="relative"
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          "& > *": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <BackGroud
          width={width}
          height={height}
          id={"backgroud1"}
          className="absolute top-0 left-0"
          rootcolor={categoryColors.backgroud}
          sx={{
            ...backgroud?.props,
          }}
          style={{
            ...backgroud?.props,
          }}
        />
        {showSkin && (
          <Skin
            id={"skin" + body?.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={categoryColors.skin}
          />
        )}
        {showHair && hair && !showHat && (
          <Hair
            id={"hair" + hair.id}
            rootcolor={categoryColors.hair}
            gradientcolor={categoryColors.skin}
            width={width}
            height={height}
            className="absolute top-0 left-0"
          />
        )}
        {showBody && body && (
          <Body
            id={"body" + body.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={categoryColors.clothes}
          />
        )}
        {showAffection && affection && (
          <Affection
            id={"affection" + affection.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={categoryColors.affection}
            gradientcolor={categoryColors.skin}
          />
        )}
        {showMoustache && moustache && (
          <Moustache
            id={"moustache" + moustache.id}
            width={width}
            height={height}
            rootcolor={categoryColors.moustache}
            gradientcolor={categoryColors.skin}
            className="absolute top-0 left-0"
          />
        )}
        {showNose && nose && (
          <Nose
            id={"nose" + nose.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={categoryColors.skin}
          />
        )}
        {showAdornment && adornment && (
          <Adornment
            id={"adornment" + adornment.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={categoryColors.adornment}
          />
        )}
        {showHat && hat && (
          <Hat
            id={"hat" + hat.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={categoryColors.hat}
          />
        )}
      </Box>
    </Box>
  );
}
