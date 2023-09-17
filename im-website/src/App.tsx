//Importações Externas
// import { createBrowserRouter as Router, Route } from 'react-router-dom'

//Importações Internas
import { Header } from "./components/Header";
import { Footer } from "./components/ui/footer";

export function App() {
  return (
      <div className="max-w-screen-2xl mx-auto">
        <Header />
      
        <Footer />
      </div>
  );
}
