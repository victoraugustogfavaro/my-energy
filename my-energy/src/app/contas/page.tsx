import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Tabela from "@/components/Tabela/Tabela";
import Link from "next/link";

function Contas() {
  return (
    <ProtectedRoute>
      <main>
        <section className="flex flex-col justify-center items-center my-24 gap-10">
          <h1 className="text-cinza text-[1.6rem] font-bold">Suas Contas</h1>
          <Tabela />
          <Link
            href="/contas/add"
            className="text-center content-center text-white bg-verde w-[200px] h-[75px] rounded-xl mx-auto text-[1.1rem] font-bold transition-transform duration-500 ease-in-out hover:scale-110"
          >
            Adicionar Conta
          </Link>
        </section>
      </main>
    </ProtectedRoute>
  );
}

export default Contas;
