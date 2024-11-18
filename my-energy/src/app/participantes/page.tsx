"use client";

import fotoVictor from "@/images/foto-victor.jpeg";
import fotoJennifer from "@/images/foto-jennifer.jpeg";
import fotoFelipe from "@/images/foto-felipe.jpeg";
import Card from "@/components/Card/Card";

function Participantes() {
  return (
    <main className="bg-gradientFundo min-h-[75vh] py-[30px]">
      <div className="flex flex-col justify-center items-center text-white my-[22px]">
        <h1 className="text-[2.2rem] font-extrabold">Participantes</h1>
        <h2 className="text-[1.3rem]">1TDSPG</h2>
      </div>
      <section className="flex flex-col gap-[15px] mb-[60px] items-center justify-center lg:flex-row lg:gap-[8%]">
        <Card
          foto={fotoVictor}
          nome={"Victor Fávaro"}
          rm={"555059"}
          git={"https://github.com/victoraugustogfavaro"}
          linkedin={
            "https://www.linkedin.com/in/victor-augusto-gigante-f%C3%A1varo-8aa7962b8/"
          }
          instagram={"https://www.instagram.com/victoraugustoo__"}
        />
        <Card
          foto={fotoFelipe}
          nome={"Felipe Clarindo"}
          rm={"554547"}
          git={"https://github.com/felipeclarindo"}
          linkedin={"https://www.linkedin.com/in/felipeclarindo/"}
          instagram={"https://www.instagram.com/lipethegoat"}
        />
        <Card
          foto={fotoJennifer}
          nome={"Jennifer Suzuki"}
          rm={"554661"}
          git={"https://github.com/jenniesuzuki"}
          linkedin={"https://www.linkedin.com/in/jennifer-kaori-suzuki/"}
          instagram={"https://www.instagram.com/jenniesuzuki/"}
        />
      </section>
      <a
        href="https://github.com/victoraugustogfavaro/my-energy"
        target="blank"
        className="flex justify-center items-center text-white bg-verde w-[250px] h-[75px] rounded-xl mx-auto my-[3%] text-[1.2rem] font-bold transition-transform duration-500 ease-in-out hover:scale-110"
      >
        Repositório
      </a>
    </main>
  );
}

export default Participantes;
