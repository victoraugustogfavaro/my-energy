import Image from "next/image";
import imagemBanner from "@/images/image.svg";
import Link from "next/link";

function Banner() {
  return (
    <section className="flex flex-col bg-gradientFundo text-white text-center h-auto gap-6 p-5 justify-center items-center md:gap-10 xl:flex-row xl:text-left xl:justify-evenly xl:p-10 xl:gap-8">
      <div className="flex flex-col justify-center items-center gap-6 md:w-[600px] xl:w-[468px] xl:ml-5">
        <h1 className="font-bold text-[1.7rem] md:text-[2rem] xl:text-[2.625rem] text-center">
          Sustentabilidade para um futuro melhor.
        </h1>
        <h2 className="text-[1.1rem] md:text-[1.2rem] text-center">
          Na MyEnergy, acreditamos que a mudança começa com a conscientização.
          Nosso projeto visa capacitar cada pessoa a entender melhor seu consumo
          de energia e seu impacto ambiental.
        </h2>
        <Link
          href="/contas"
          className="text-[1.125rem] bg-verde text-white border-none cursor-pointer rounded-lg h-[75px] w-[200px] px-2 font-bold transition-transform duration-500 ease-in-out hover:scale-110 text-center content-center"
        >
          Visualizar Contas
        </Link>
      </div>
      <Image
        src={imagemBanner}
        alt="Paisagem com várias turbinas eólicas em uma área montanhosa ao entardecer, com luz do sol brilhando entre as hélices e colinas ao fundo."
      />
    </section>
  );
}

export default Banner;
