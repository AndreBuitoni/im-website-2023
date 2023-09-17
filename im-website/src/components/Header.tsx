import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b bg-neutral-950">
      <h1 className="text-2xl font-bold hover:cursor-pointer">Inglês Moleza</h1>
      <div className="flex gap-10">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Leituras</Button>
        <Button variant="ghost">Aprendizagem</Button>
        <Button variant="default">YouTube</Button>
        <Button variant="destructive">Apoie</Button>
      </div>
    </header>
  );
}
