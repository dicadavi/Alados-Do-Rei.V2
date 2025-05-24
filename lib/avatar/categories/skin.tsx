import { AvatarPart, AvatarPartProps } from "../types";
import Skin1 from "../componentes/skin/Skin1";
import Skin2 from "../componentes/skin/Skin2";
import Skin3 from "../componentes/skin/Skin3";
import Skin4 from "../componentes/skin/Skin4";
import Skin5 from "../componentes/skin/Skin5";
import Skin6 from "../componentes/skin/Skin6";

const skins: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <Skin1 {...props} />,
  skin1: (props: AvatarPartProps) => <Skin1 {...props} />,
  skin2: (props: AvatarPartProps) => <Skin2 {...props} />,
  skin3: (props: AvatarPartProps) => <Skin3 {...props} />,
  skin4: (props: AvatarPartProps) => <Skin4 {...props} />,
  skin5: (props: AvatarPartProps) => <Skin5 {...props} />,
  skin6: (props: AvatarPartProps) => <Skin6 {...props} />,
};

export const Skin: AvatarPart = (props) => {
  const { id, ...rest } = props;
  const SkinComponent = skins[id] || skins.default;
  return <SkinComponent id={id} {...rest} />;
};
