"use client";

import { ContaDeLuz } from "@/types";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

function Tabela() {
  const [contas, setConta] = useState<ContaDeLuz[]>([]);

  const chamadaApi = async () => {
    const authCPF = localStorage.getItem("authCPF");

    const response = await fetch(
      `http://localhost:8080/myenergy/contas/${authCPF}`
    );
    const data = await response.json();

    setConta(data);
  };

  useEffect(() => {
    chamadaApi();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const confirmarDelete = confirm(
        "Você realmente deseja apagar essa conta?"
      );

      if (confirmarDelete) {
        const response = await fetch(
          `http://localhost:8080/myenergy/contas/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          alert("Conta de luz excluída com sucesso.");
          chamadaApi();
        }
      }
    } catch (error) {
      alert(`Falha ao remover a conta: ${error} `);
    }
  };

  return (
    <table className="bg-laranja text-white">
      <thead>
        <tr className="">
          <th className="px-4 py-2 border">Data</th>
          <th className="px-4 py-2 border">Valor (R$)</th>
          <th className="px-4 py-2 border">kWh</th>
          <th className="px-4 py-2 border">CO₂ (Gerado)</th>
          <th className="px-4 py-2 border">Ações</th>
        </tr>
      </thead>
      <tbody>
        {contas.map((c) => (
          <tr key={c.id} className="bg-[#D9D9D9] text-cinza">
            <td className="px-4 py-2 border">{c.data}</td>
            <td className="px-4 py-2 border">{c.valor}</td>
            <td className="px-4 py-2 border">{c.kwh}</td>
            <td className="px-4 py-2 border">{c.co2}</td>
            <td className="px-4 py-2 border flex justify-center gap-2">
              <Link href={`/contas/${c.id}`}>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-[1.5rem] transition-transform duration-500 ease-in-out hover:scale-110 p-2"
                />
              </Link>
              <button
                onClick={() => handleDelete(c.id)}
                className="text-[1.5rem] transition-transform duration-500 ease-in-out hover:scale-110 p-2"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5} className="px-4 py-2 text-start border text-white">
            Total de contas: <span className="text-cinza">{contas.length}</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Tabela;
