import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto h-screen max-w-7xl px-6 flex flex-col items-center justify-center">
      <h1>Página não encontrado</h1>
      <h2>
        <Link className="text-primary" href="/">
          Voltar para página inicial
        </Link>
      </h2>
    </div>
  );
}
