import { Button } from "./button";
import { Input } from "./input";

export function NewsletterSubscribe () {
  return (
    <div className="w-4/12 h-fit pt-2 pb-5 pl-2 border-t border-b border-b-white border-t-white">
      <h2 className="pb-4 text-xl font-bold text-center">Receba nossa newsletter no seu email</h2>
      <div className="flex gap-3 justify-center pl-2">
        <div className="pb-3 pr-2">
          <ul className="list-disc">
            <li>Dicas de Inglês</li>
            <li>Aulas Gratuitas</li>
            <li>Lançamento de Vídeos</li>
          </ul>
        </div>
        <div className="items-center">
          <Input placeholder="insira seu email" className="bg-red-50 rounded-md text-center mr-2 mb-1 text-black" />
          <Button className="w-full rounded-2xl">Assine a Newsletter</Button>
        </div>
      </div>
    </div>
  )
}