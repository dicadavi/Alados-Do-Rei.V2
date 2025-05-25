import { AvatarPart, AvatarPartProps } from "../types";
import BackGroud1 from "../componentes/background/BackGroud1";

const backgrouds: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <BackGroud1 {...props} />,
};

export const BackGroud: AvatarPart = (props) => {
  const { id, rootcolor, ...rest } = props;
  const BackGroudComponent = backgrouds[id] || backgrouds.default;
  return <BackGroudComponent id={id} rootcolor={rootcolor} {...rest} />;
};
