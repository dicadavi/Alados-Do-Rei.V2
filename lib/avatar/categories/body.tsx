import { AvatarPart, AvatarPartProps } from "../types";
import Body1 from "./../componentes/body/Body1";
import Body2 from "./../componentes/body/Body2";
import Body3 from "./../componentes/body/Body3";
import Body4 from "./../componentes/body/Body4";
import Body5 from "./../componentes/body/Body5";
import Body6 from "./../componentes/body/Body6";

const bodies: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <Body1 {...props} />,
  body1: (props: AvatarPartProps) => <Body1 {...props} />,
  body2: (props: AvatarPartProps) => <Body2 {...props} />,
  body3: (props: AvatarPartProps) => <Body3 {...props} />,
  body4: (props: AvatarPartProps) => <Body4 {...props} />,
  body5: (props: AvatarPartProps) => <Body5 {...props} />,
  body6: (props: AvatarPartProps) => <Body6 {...props} />,
};

export const Body: AvatarPart = (props) => {
  const { id, ...rest } = props;
  const BodyComponent = bodies[id] || bodies.default;
  return <BodyComponent id={id} {...rest} />;
};
