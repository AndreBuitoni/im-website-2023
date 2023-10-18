import { Card } from "@/components/ui/Card"
import database from '../database.json' 

export function Leituras () {

  return (
    <main className="w-full p-4 bg-gray-300 flex flex-col">
        <div className="bg-gray-50 rounded-md p-4 mb-4">
          <h1 className="text-4xl font-bold text-black">
            Leituras - Textos Para Aprender Inglês
          </h1>
          <p className="p-2 text-black text-xl">
            Os textos abaixo estão separados por níveis básicos (A1 e A2) e
            níveis intermediários (B1 e B2).
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          {/* Estes são os 4 CARDS, separados por níveis de inglês, contendo os links para os textos */}
          <Card 
            title="A1 - Iniciante"
            links={titlesByLevel("A1", database.texts)}
          />
          <Card 
            title="A2 - Elementar"
            links={titlesByLevel("A2", database.texts)}
          />
          <Card 
            title="B1 - Intermediário"
            links={titlesByLevel("B1", database.texts)}
          />
          <Card 
            title="B2 - Intermediário Superior"
            links={titlesByLevel("B2", database.texts)}
          />
        </div>
      </main>
  )
}

interface TextType {
  id: number
  level: string
  title: string
  content: string
}

function titlesByLevel(level: string, texts: TextType[]) {
  
  return texts.filter(t => t.level == level).map(t => t.title)
}