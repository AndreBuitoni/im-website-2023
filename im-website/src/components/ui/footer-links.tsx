export function FooterLinks () {
  return (
    <div className="flex gap-8">
      <div>
        <h1 className="pb-3">APOIE</h1>
        <ul>
          <li className="hover:cursor-pointer hover:text-primary">Doações</li>
          <li className="hover:cursor-pointer hover:text-primary">Seja Voluntário</li>
          <li className="hover:cursor-pointer hover:text-primary">Contato</li>
        </ul>
      </div>
      <div>
        <h1 className="pb-3">NAVEGAÇÃO</h1>
        <ul>
          <li className="hover:cursor-pointer hover:text-primary">Home</li>
          <li className="hover:cursor-pointer hover:text-primary">Leituras</li>
          <li className="hover:cursor-pointer hover:text-primary">Aprendizagem</li>
          <li className="hover:cursor-pointer hover:text-primary">YouTube</li>
        </ul>

      </div>
    </div>
  )
}