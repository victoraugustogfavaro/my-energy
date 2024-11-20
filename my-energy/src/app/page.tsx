import Banner from "@/components/Banner/Banner";

function Home() {
  return (
    <main>
      <Banner />
      <div className={"w-[70%] my-[3%] mx-auto"}>
        <h2 className={"text-laranja mt-[30px] text-[1.6rem] font-bold"}>
          Nossa Essência
        </h2>
        <p className={"mt-[14px] text-[1.2rem] text-cinza"}>
          Acreditamos que entender o{" "}
          <span className="font-bold">impacto do consumo de energia</span> é o
          primeiro passo para um mundo mais sustentável. Nosso gerenciador
          permite que você{" "}
          <span className="font-bold">visualize as emissões de CO₂</span>{" "}
          geradas por cada conta de luz, incentivando escolhas mais conscientes
          e{" "}
          <span className="font-bold">
            contribuindo para a preservação do meio ambiente
          </span>
          .
        </p>
        <h2 className={"text-laranja mt-[30px] text-[1.6rem] font-bold"}>
          Por que Energia Sustentável?
        </h2>
        <p className={"mt-[14px] text-[1.2rem] text-cinza"}>
          A energia sustentável é essencial para{" "}
          <span className="font-bold">combater as mudanças climáticas</span> e{" "}
          <span className="font-bold">
            reduzir a dependência de combustíveis fósseis
          </span>
          . Fontes como solar e eólica emitem significativamente menos CO₂,
          preservando a qualidade do ar e os ecossistemas.
        </p>
        <p className={"mt-[14px] text-[1.2rem] text-cinza"}>
          Nosso projeto busca incentivar o uso dessas fontes renováveis ao
          tornar visível o impacto do consumo atual de cada um, promovendo a{" "}
          {""}
          <span className="font-bold">conscientização</span> sobre as
          alternativas energéticas mais limpas.
        </p>
        <h2 className={"text-laranja mt-[30px] text-[1.6rem] font-bold"}>
          Benefícios do Monitoramento do Consumo de Energia
        </h2>
        <p className={"mt-[14px] text-[1.2rem] text-cinza"}>
          Com o gerenciador da MyEnergy, você acompanha o impacto ambiental de
          cada kWh consumido. Você pode observar como pequenas mudanças no
          consumo podem{" "}
          <span className="font-bold">reduzir as emissões de CO₂</span>. Esse
          monitoramento é uma ferramenta poderosa para quem quer economizar e
          adotar práticas mais ecológicas.
        </p>
        <p className={"mt-[14px] text-[1.2rem] text-cinza"}>
          Cada ajuste no seu consumo não só contribui para a redução dos custos
          de energia, mas também representa um passo em direção a um{" "}
          <span className="font-bold">futuro mais limpo</span>. Ao ter
          visibilidade sobre o impacto de cada hábito, você é capacitado a
          adotar uma postura mais <span className="font-bold">consciente</span>{" "}
          e <span className="font-bold">sustentável</span>, promovendo um efeito
          positivo para a{" "}
          <span className="font-bold">preservação do planeta!</span>
        </p>
      </div>
    </main>
  );
}

export default Home;
