import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b bg-neutral-950">
      <h1 className="text-2xl font-bold hover:cursor-pointer">Inglês Moleza</h1>
      <div className="flex gap-10">
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to="/leituras">
          <Button variant="ghost">Leituras</Button>
        </Link>
        <Link to="/aprendizagem">
          <Button variant="ghost">Aprendizagem</Button>
        </Link>
        <Link to="http://youtube.com/@inglesmoleza" target="__blank">
          <Button variant="default">YouTube</Button>
        </Link>
        
        <Button variant="destructive">Apoie</Button>
      </div>
    </header>
  );
}
