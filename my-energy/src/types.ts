import { StaticImageData } from "next/image";

export type CardProps = {
  foto: string | StaticImageData;
  nome: string;
  rm: string;
  git: string;
  linkedin: string;
  instagram: string;
};
