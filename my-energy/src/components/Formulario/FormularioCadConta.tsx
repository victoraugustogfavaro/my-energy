"use client";

import { ContaDeLuzCadastroAndLogin } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormularioCadastroConta = () => {
  const router = useRouter();

  const [conta, setConta] = useState<ContaDeLuzCadastroAndLogin>({
    data: "",
    valor: 0,
    kwh: 0,
  });

  const [erros, setErros] = useState({
    data: "",
    valor: "",
    kwh: "",
  });

  // Validações
  const validarData = (data: string) => {
    const hoje = new Date();
    const dataInput = new Date(data);
    return dataInput <= hoje;
  };

  const validarNumero = (valor: number) => valor > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const parsedValue =
      name === "valor" || name === "kwh" ? Number(value) : value;

    setConta({ ...conta, [name]: parsedValue });

    if (name === "data") {
      setErros({
        ...erros,
        data: validarData(value)
          ? ""
          : "A data deve ser anterior ou igual a hoje.",
      });
    }

    if (name === "valor" || name === "kwh") {
      setErros({
        ...erros,
        [name]: validarNumero(Number(value))
          ? ""
          : `${name === "valor" ? "Valor" : "kWh"} deve ser maior que zero.`,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !validarData(conta.data) ||
      !validarNumero(conta.valor) ||
      !validarNumero(conta.kwh)
    ) {
      alert("Por favor, corrija os erros antes de enviar o formulário.");
      return;
    }

    // Obter o CPF do localStorage
    const authCPF = localStorage.getItem("authCPF");

    // Montar os dados para envio
    const dadosParaEnvio = {
      usuarioCpf: authCPF,
      ...conta,
    };

    try {
      const response = await fetch("http://localhost:8080/myenergy/contas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosParaEnvio),
      });

      if (response.ok) {
        alert("Conta de luz cadastrada com sucesso.");
        setConta({ data: "", valor: 0, kwh: 0 });
        router.push("/contas");
      } else {
        alert("Erro ao adicionar a conta de luz. Tente novamente.");
      }
    } catch (error) {
      alert(`Falha ao cadastrar a conta de luz: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-[340px] h-[500px] mx-auto my-16 bg-laranja text-white rounded-2xl xs:w-[370px] sm:w-[400px]"
    >
      <h1 className="text-center font-bold text-cinza">Conta de Luz</h1>
      <div className="flex flex-col mt-8">
        <label htmlFor="data">Data</label>
        <input
          type="date"
          name="data"
          id="data"
          className="h-[35px] p-3 rounded-md text-cinza"
          required
          placeholder="Selecione a data"
          value={conta.data}
          onChange={handleChange}
        />
        <span className="text-red-600 text-center w-[320px]">{erros.data}</span>
      </div>
      <div className="flex flex-col my-4">
        <label htmlFor="valor">Valor (R$)</label>
        <input
          type="number"
          name="valor"
          id="valor"
          className="h-[35px] p-3 rounded-md text-black"
          required
          placeholder="Digite o valor da conta"
          value={conta.valor || ""}
          onChange={handleChange}
        />
        <span className="text-red-600 text-center w-[320px]">
          {erros.valor}
        </span>
      </div>
      <div className="flex flex-col mb-7">
        <label htmlFor="kwh">kWh</label>
        <input
          type="number"
          name="kwh"
          id="kwh"
          className="h-[35px] p-3 rounded-md text-black"
          required
          placeholder="Digite o valor de kWh"
          value={conta.kwh || ""}
          onChange={handleChange}
        />
        <span className="text-red-600 text-center w-[320px]">{erros.kwh}</span>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center bg-verde w-[150px] text-white text-[1.1rem] rounded-2xl h-[60px] font-bold transition-all duration-500 ease-in-out hover:scale-110"
      >
        Adicionar
      </button>
    </form>
  );
};

export default FormularioCadastroConta;
