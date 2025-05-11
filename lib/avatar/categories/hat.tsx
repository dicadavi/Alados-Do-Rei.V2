import { AvatarPart, AvatarPartProps } from "../types";
import Hat1 from "../componentes/hat/Hat1";
import Hat2 from "../componentes/hat/Hat2";
import Hat3 from "../componentes/hat/Hat3";
import Hat4 from "../componentes/hat/Hat4";
import Hat5 from "../componentes/hat/Hat5";
import Hat6 from "../componentes/hat/Hat6";
import Hat7 from "../componentes/hat/Hat7";
import Hat8 from "../componentes/hat/Hat8";
import Hat9 from "../componentes/hat/Hat9";
import Hat10 from "../componentes/hat/Hat10";
import Hat11 from "../componentes/hat/Hat11";

const hats: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <Hat1 {...props} />,
  hat2: (props: AvatarPartProps) => <Hat2 {...props} />,
  hat3: (props: AvatarPartProps) => <Hat3 {...props} />,
  hat4: (props: AvatarPartProps) => <Hat4 {...props} />,
  hat5: (props: AvatarPartProps) => <Hat5 {...props} />,
  hat6: (props: AvatarPartProps) => <Hat6 {...props} />,
  hat7: (props: AvatarPartProps) => <Hat7 {...props} />,
  hat8: (props: AvatarPartProps) => <Hat8 {...props} />,
  hat9: (props: AvatarPartProps) => <Hat9 {...props} />,
  hat10: (props: AvatarPartProps) => <Hat10 {...props} />,
  hat11: (props: AvatarPartProps) => <Hat11 {...props} />,
};

export const Hat: AvatarPart = (props) => {
  const { id, ...rest } = props;
  const HatComponent = hats[id] || hats.default;
  return <HatComponent id={id} {...rest} />;
};
