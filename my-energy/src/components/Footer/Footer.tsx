import Image from "next/image";
import Logo from "@/images/logo.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-cinza h-[200px] flex flex-col justify-center items-center gap-4">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo de um sol, abaixo dele folhas verdes e riscos azuis, remetentes a sustentabilidade"
          className="transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </Link>
      <p className="font-light text-white">&copy; Copyright - 2024</p>
    </footer>
  );
}

export default Footer;
