export function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto bg-gray-300 p-4">
      {/*Esta DIV é o título da página*/}
      <div className="bg-gray-50 rounded-md p-4 mb-4 w-full mx-auto">
        <h1 className="text-black font-bold text-4xl">
          Home - Seja bem vindo ao site do Inglês Moleza
        </h1>
        <p className="text-black text-xl py-4">
          Esta página foi criada para te ajudar a aprender inglês. Veja abaixo
          algumas páginas do nosso website que podem lhe ajudar.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-4">
          {/* Estes são os 4 CARDS, separados por níveis de inglês, contendo os links para os textos */}
          <div className="w-auto p-4 bg-gray-50 h-auto rounded-md">
            <h2 className="mb-2 text-3xl font-bold text-black">Página Leituras</h2>
            <p className="text-black">Nesta página você encontra textos em inglês, separados por níveis (desde A1 até B2), contendo também um glossário inglês para português para lhe ajudar no entendimento do texto e para ampliar o seu vocabulário</p>
          </div>

          <div className="w-auto p-4 bg-gray-50 h-auto rounded-md">
            <h2 className="mb-2 text-3xl font-bold text-black">Página Aprendizagem</h2>
            <p className="text-black">Nesta página você encontra jogos e atividades variadas para praticar o inglês.</p>
          </div>

          <div className="w-auto p-4 bg-gray-50 h-auto rounded-md">
            <h2 className="mb-2 text-3xl font-bold text-black">Botão YouTube</h2>
            <p className="text-black">Este botão abre uma nova aba do seu navegador e leva você para o nosso canal no YouTube, onde você pode assistir vídeos gratuitamente para aprender e praticar inglês. Quando acessar pela primeira vez, lembre-se de se inscrever no canal.</p>
          </div>

          <div className="w-auto p-4 bg-gray-50 h-auto rounded-md">
            <h2 className="mb-2 text-3xl font-bold text-black">Botão Apoie</h2>
            <p className="text-black">Este botão ainda está em desenvolvimento. Estamos desenvolvendo maneiras para que você possa apoiar o projeto Inglês Moleza e nos ajudar para que cada vez mais pessoas possam aprender inglês.</p>
          </div>
        </div>

    </main>
  );
}
