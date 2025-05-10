import React from "react";

interface AvatarDisplayProps {
  className?: string;
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ className }) => {
  return (
    <div className={`relative w-[495.87px] h-[685px] ${className}`}>
      {/* Corpo - Camada mais baixa */}
      <img
        src="/avatar/Corpo/1.svg"
        alt="Corpo"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Afeição */}
      <img
        src="/avatar/Afeição/1.svg"
        alt="Afeição"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Adereço */}
      <img
        src="/avatar/Adereço/1.svg"
        alt="Adereço"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Bigode */}
      <img
        src="/avatar/Bigode/file (1).svg"
        alt="Bigode"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Cabelo */}
      <img
        src="/avatar/Cabelo/Group (1).svg"
        alt="Cabelo"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Chapeu - Camada mais alta */}
      <img
        src="/avatar/Chapeus/Group (1).svg"
        alt="Chapeu"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};
