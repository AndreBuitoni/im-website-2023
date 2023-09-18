// Importações Externas
import { Route, Routes } from "react-router-dom";

// Header e Footer
import { Header } from "./components/Header";
import { Footer } from "./components/footer";

// Rotas
import { Home } from "./pages/Home";
import { LeiturasPage } from "./pages/LeiturasPage";
import { Aprendizagem } from "./pages/Aprendizagem";
import { Text } from "./components/Text";
import { NotFoundPage } from "./pages/NotFound";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leituras">
          <Route index element={<LeiturasPage />} />
          <Route path=":title" element={<Text />} />
        </Route>
        <Route path="/aprendizagem" element={<Aprendizagem />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
