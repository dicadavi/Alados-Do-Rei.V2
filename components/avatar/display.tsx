import * as React from "react";
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
  BackGroud,
} from "@/lib/avatar";

// Definindo as tipagens para as props de cada componente
interface SkinProps {
  rootcolor: string;
}

interface BackGroudProps {
  rootcolor: string;
  props?: React.CSSProperties;
}

interface BodyProps {
  id: string;
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
  skin,
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
          rootcolor={backgroud?.rootcolor || "#c6fde7"}
          style={{
            ...backgroud?.props,
          }}
        />
        {showSkin && skin && (
          <Skin
            id={"skin" + body?.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={skin.rootcolor}
          />
        )}
        {showBody && body && (
          <Body
            id={"body" + body.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={skin.rootcolor}
          />
        )}
        {showAffection && affection && (
          <Affection
            id={"affection" + affection.id}
            width={width}
            height={height}
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
            width={width}
            height={height}
            className="absolute top-0 left-0"
          />
        )}
        {showMoustache && moustache && (
          <Moustache
            id={"moustache" + moustache.id}
            width={width}
            height={height}
            rootcolor={moustache.rootcolor}
            gradientcolor={skin.rootcolor}
            className="absolute top-0 left-0"
          />
        )}
        {showNose && nose && (
          <Nose
            id={"nose" + nose.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={skin.rootcolor}
          />
        )}
        {showAdornment && adornment && (
          <Adornment
            id={"adornment" + adornment.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={adornment.rootcolor}
          />
        )}
        {showHat && hat && (
          <Hat
            id={"hat" + hat.id}
            width={width}
            height={height}
            className="absolute top-0 left-0"
            rootcolor={hat.rootcolor}
          />
        )}
      </Box>
    </Box>
  );
}
