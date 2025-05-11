import { AvatarPart, AvatarPartProps } from "../types";
import Adornment1 from "../componentes/adornment/Adornment1";
import Adornment2 from "../componentes/adornment/Adornment2";
import Adornment3 from "../componentes/adornment/Adornment3";
import Adornment4 from "../componentes/adornment/Adornment4";
import Adornment5 from "../componentes/adornment/Adornment5";
import Adornment6 from "../componentes/adornment/Adornment6";
import Adornment7 from "../componentes/adornment/Adornment7";
import Adornment8 from "../componentes/adornment/Adornment8";
import Adornment9 from "../componentes/adornment/Adornment9";
import Adornment10 from "../componentes/adornment/Adornment10";
import Adornment11 from "../componentes/adornment/Adornment11";
import Adornment12 from "../componentes/adornment/Adornment12";
import Adornment13 from "../componentes/adornment/Adornment13";
import Adornment14 from "../componentes/adornment/Adornment14";

const adornments: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <Adornment1 {...props} />,
  adornment1: (props: AvatarPartProps) => <Adornment1 {...props} />,
  adornment2: (props: AvatarPartProps) => <Adornment2 {...props} />,
  adornment3: (props: AvatarPartProps) => <Adornment3 {...props} />,
  adornment4: (props: AvatarPartProps) => <Adornment4 {...props} />,
  adornment5: (props: AvatarPartProps) => <Adornment5 {...props} />,
  adornment6: (props: AvatarPartProps) => <Adornment6 {...props} />,
  adornment7: (props: AvatarPartProps) => <Adornment7 {...props} />,
  adornment8: (props: AvatarPartProps) => <Adornment8 {...props} />,
  adornment9: (props: AvatarPartProps) => <Adornment9 {...props} />,
  adornment10: (props: AvatarPartProps) => <Adornment10 {...props} />,
  adornment11: (props: AvatarPartProps) => <Adornment11 {...props} />,
  adornment12: (props: AvatarPartProps) => <Adornment12 {...props} />,
  adornment13: (props: AvatarPartProps) => <Adornment13 {...props} />,
  adornment14: (props: AvatarPartProps) => <Adornment14 {...props} />,
};

export const Adornment: AvatarPart = (props) => {
  const { id, ...rest } = props;
  const AdornmentComponent = adornments[id] || adornments.default;
  return <AdornmentComponent id={id} {...rest} />;
};
