import { AvatarPart, AvatarPartProps } from "../types";

const skins: Record<string, AvatarPart> = {
  default: (props: AvatarPartProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 100}
      height={props.height || 100}
      {...props}
    >
      <circle cx="50" cy="50" r="40" fill="pink" />
      <circle cx="35" cy="40" r="5" fill="black" />
      <circle cx="65" cy="40" r="5" fill="black" />
      <path
        d="M 35 65 Q 50 75 65 65"
        stroke="black"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  happy: (props: AvatarPartProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 100}
      height={props.height || 100}
      {...props}
    >
      <circle cx="50" cy="50" r="40" fill="pink" />
      <circle cx="35" cy="40" r="5" fill="black" />
      <circle cx="65" cy="40" r="5" fill="black" />
      <path
        d="M 35 60 Q 50 75 65 60"
        stroke="black"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
  sad: (props: AvatarPartProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 100}
      height={props.height || 100}
      {...props}
    >
      <circle cx="50" cy="50" r="40" fill="pink" />
      <circle cx="35" cy="40" r="5" fill="black" />
      <circle cx="65" cy="40" r="5" fill="black" />
      <path
        d="M 35 75 Q 50 60 65 75"
        stroke="black"
        fill="none"
        strokeWidth="2"
      />
    </svg>
  ),
};

export const Skin: AvatarPart = (props) => {
  const { id, ...rest } = props;
  const SkinComponent = skins[id] || skins.default;
  return <SkinComponent id={id} {...rest} />;
};
