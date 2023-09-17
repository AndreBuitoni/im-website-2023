export function FooterLinks () {

  const listItemClasses ="cursor-pointer hover:text-primary hover:underline transition duration-300" 

  return (
    <div className="flex gap-8">
      <div>
        <h1 className="pb-3">APOIE</h1>
        <ul className="space-y-1">
          <li className={listItemClasses}>Doações</li>
          <li className={listItemClasses}>Seja Voluntário</li>
          <li className={listItemClasses}>Contato</li>
        </ul>
      </div>
      <div>
        <h1 className="pb-3">NAVEGAÇÃO</h1>
        <ul className="space-y-1">
          <li className={listItemClasses}>Home</li>
          <li className={listItemClasses}>Leituras</li>
          <li className={listItemClasses}>Aprendizagem</li>
          <li className={listItemClasses}>YouTube</li>
        </ul>
      </div>
    </div>
  )
}