import { AvatarPart, AvatarPartProps } from "../types";
import Moustache1 from "../componentes/moustache/Moustache1";
import Moustache2 from "../componentes/moustache/Moustache2";
import Moustache3 from "../componentes/moustache/Moustache3";
import Moustache4 from "../componentes/moustache/Moustache4";
import Moustache5 from "../componentes/moustache/Moustache5";
import Moustache6 from "../componentes/moustache/Moustache6";

const moustaches: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <Moustache1 {...props} />,
  moustache1: (props: AvatarPartProps) => <Moustache1 {...props} />,
  moustache2: (props: AvatarPartProps) => <Moustache2 {...props} />,
  moustache3: (props: AvatarPartProps) => <Moustache3 {...props} />,
  moustache4: (props: AvatarPartProps) => <Moustache4 {...props} />,
  moustache5: (props: AvatarPartProps) => <Moustache5 {...props} />,
  moustache6: (props: AvatarPartProps) => <Moustache6 {...props} />,
};

export const Moustache: AvatarPart = (props) => {
  const { id, rootColor, gradientColor, ...rest } = props;
  const MoustacheComponent = moustaches[id] || moustaches.default;
  return (
    <MoustacheComponent
      id={id}
      rootColor={rootColor || "#444"}
      gradientColor={gradientColor || "#f0d5ca"}
      {...rest}
    />
  );
};
