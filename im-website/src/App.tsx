import { Button } from "./components/ui/button";
import { Footer } from "./components/ui/footer";


export function App() {
  return (
    <div className="">
      <header className="px-6 py-3 flex items-center justify-between border-b bg-black">
        <h1 className="text-2xl font-bold hover:cursor-pointer">Inglês Moleza</h1>

        <div className="flex gap-10">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Leituras</Button>
          <Button variant="ghost">Aprendizagem</Button>
          <Button variant="default">YouTube</Button>
        </div>
        
      </header>

      <main className="">
        <p>Main Area Here</p>
        <p>Main Area Here</p>
      </main>

      <Footer />
      
    </div>
    
  )
}
