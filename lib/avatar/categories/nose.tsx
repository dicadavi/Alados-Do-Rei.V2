import { AvatarPart, AvatarPartProps } from "../types";
import Nose1 from "../componentes/nose/Nose1";

const noses: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <Nose1 {...props} />,
};

export const Nose: AvatarPart = (props) => {
  const { id, ...rest } = props;
  const NoseComponent = noses[id] || noses.default;
  return <NoseComponent id={id} {...rest} />;
};
