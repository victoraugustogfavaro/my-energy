import { StaticImageData } from "next/image";

export type CardProps = {
  foto: string | StaticImageData;
  nome: string;
  rm: string;
  git: string;
  linkedin: string;
  instagram: string;
};

export type UsuarioCadastro = {
  nome: string;
  cpf: string;
  senha: string;
};

export type UsuarioLogin = {
  cpf: string;
  senha: string;
};

export type ContaDeLuzCadastroAndLogin = {
  data: string;
  valor: number;
  kwh: number;
};

export type ContaDeLuz = {
  id: number;
  data: string;
  valor: number;
  kwh: number;
  co2: string;
};
