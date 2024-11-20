"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu() {
  const pathname = usePathname().replace(/\/$/, ""); // Normaliza o pathname

  function getLinkClass(path: string) {
    return pathname === path
      ? "border-b-2 p-2 md:p-4 transition-colors duration-500 ease-in-out hover:text-verde hover:border-verde"
      : "transition-colors duration-500 ease-in-out hover:text-verde p-2 md:p-4";
  }

  const buttomLinks =
    pathname === "/contas" ||
    pathname === "/contas/add" ||
    /^\/contas\/\d+$/.test(pathname); // Verifica rotas com id

  return (
    <nav>
      <ul
        className={
          buttomLinks
            ? "flex flex-col gap-4 sm:flex-row sm:gap-4 mg:gap-14 lg:gap-16  xl:gap-24 xxl:ml-[135px]  text-white text-center font-bold"
            : "flex flex-col gap-4 xs:flex-row xs:gap-8 md:gap-16 lg:gap-24 text-white text-center font-bold"
        }
      >
        <li>
          <Link href="/" className={getLinkClass("")}>
            HOME
          </Link>
        </li>
        {!(pathname === "/login" || pathname === "/cadastro") && (
          <li>
            <Link href="/contas" className={getLinkClass("/contas")}>
              CONTAS
            </Link>
          </li>
        )}
        <li>
          <Link
            href="/participantes"
            className={getLinkClass("/participantes")}
          >
            PARTICIPANTES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
