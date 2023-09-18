import { Link } from "react-router-dom";

export function NotFoundPage () {
  return (
    <div className="bg-gray-200 p-5 w-full mx-auto">
      <h1 className="text-black font-bold text-xl">Desculpe, não encontramos essa página.</h1>
      <p className="text-black py-4">Esse erro aparece quando o seu navegador está tentando acessar uma página que não existe em nosso sistema. Por favor verifique a URL solicitada ou volte para a nossa <Link to="/" className="font-bold hover:text-primary" >Página Inicial</Link></p>
    </div>
  )
}