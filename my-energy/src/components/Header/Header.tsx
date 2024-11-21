"use client";

import Image from "next/image";
import logo from "@/images/logo.png";
import Menu from "../Menu/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const buttomLinks =
    pathname === "/contas" ||
    pathname === "/contas/add" ||
    /^\/contas\/\d+$/.test(pathname); // Verifica rotas com id

  const handleLogout = () => {
    const confirmarLogout = confirm("Você realmente deseja sair?");
    if (confirmarLogout) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authCPF");
      window.location.href = "/login"; // Redireciona para a página de login
    }
  };

  return (
    <header className="flex justify-between items-center h-[120px] gap-2 px-6 md:px-14 lg:px-28 bg-azul">
      <Link href="/">
        <Image
          className="min-w-[80px] transition-transform duration-500 ease-in-out hover:scale-110"
          src={logo}
          alt={
            "Logo de um sol, abaixo dele folhas verdes e riscos azuis, remetentes a sustentabilidade"
          }
          width={80}
        />
      </Link>
      <Menu />
      <button
        onClick={handleLogout}
        className={
          buttomLinks
            ? "xs:text-[1rem] sm:text-[1.125rem] bg-verde text-white border-none cursor-pointer rounded-lg h-[75px] w-[140px] px-2 font-bold transition-transform duration-500 ease-in-out hover:scale-110"
            : "hidden"
        }
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
