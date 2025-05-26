import { AvatarPart, AvatarPartProps } from "../types";
import Adornment from "../componentes/category/adornment";
import Affection from "../componentes/category/affection";
import BackGroud from "../componentes/category/backgroud";
import Body from "../componentes/category/body";
import Clothes from "../componentes/category/clothes";
import Hair from "../componentes/category/hair";
import Hat from "../componentes/category/hat";
import Moustache from "../componentes/category/moustache";

const category: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => <Adornment {...props} />,
  adornment: (props: AvatarPartProps) => <Adornment {...props} />,
  affection: (props: AvatarPartProps) => <Affection {...props} />,
  backgroud: (props: AvatarPartProps) => <BackGroud {...props} />,
  body: (props: AvatarPartProps) => <Body {...props} />,
  clothes: (props: AvatarPartProps) => <Clothes {...props} />,
  hair: (props: AvatarPartProps) => <Hair {...props} />,
  hat: (props: AvatarPartProps) => <Hat {...props} />,
  moustache: (props: AvatarPartProps) => <Moustache {...props} />,
};

export const Category: AvatarPart = (props) => {
  const { id, rootcolor, ...rest } = props;
  const CategoryComponent = category[id] || category.default;
  return <CategoryComponent id={id} rootcolor={rootcolor} {...rest} />;
};
