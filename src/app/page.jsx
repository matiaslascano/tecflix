import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100vh-76px)] md:h-[calc(100vh-76px)]">
      <h1 className="flex items-center justify-center font-bold text-5xl">
        Tec<span className="text-red-600 font-bold">FLIX</span>
      </h1>
      <p className="my-4 text-center">
        Aprende tecnología con facilidad en Tec
        <span className="text-red-600 font-bold">FLIX</span>. Tutoriales breves
        para adultos mayores.
      </p>

      <button className="btn bg-red-600 text-white hover:bg-red-500 flex justify-center items-center uppercase font-bold text-xl">
        <Link href="/principal" className="uppercase font-bold">
          ingresar
        </Link>
      </button>
    </main>
  );
}
