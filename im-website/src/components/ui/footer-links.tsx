import { Link } from 'react-router-dom'

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
          <li className={listItemClasses}>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className={listItemClasses}>
          <Link to="/leituras">
              Leituras
            </Link>
          </li>
          <li className={listItemClasses}>
          <Link to="/aprendizagem">
              Aprendizagem
            </Link>
          </li>
          <li className={listItemClasses}>
          <Link to="http://youtube.com/@inglesmoleza" target='__blank'>
              YouTube
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}