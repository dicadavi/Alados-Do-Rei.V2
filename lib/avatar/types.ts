export interface AvatarPartProps {
  id: string;
  className?: string;
  width?: number;
  height?: number;
  rootcolor?: string;
  gradientcolor?: string;
  [key: string]: any;
}

export type AvatarPart = React.FC<AvatarPartProps>;
