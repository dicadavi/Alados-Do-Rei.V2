export interface AvatarPartProps {
  id: string;
  className?: string;
  width?: number;
  height?: number;
  rootColor?: string;
  gradientColor?: string;
  [key: string]: any;
}

export type AvatarPart = React.FC<AvatarPartProps>;
