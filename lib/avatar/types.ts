export interface AvatarPartProps {
  id: string;
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

export type AvatarPart = React.FC<AvatarPartProps>;
