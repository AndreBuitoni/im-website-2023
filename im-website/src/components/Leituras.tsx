import { Card } from "@/components/ui/Card"

export function Leituras () {
  return (
    <main className="w-full p-4 bg-gray-300 flex flex-col min-h-screen">
        <div className="bg-gray-50 rounded-md p-4 mb-4">
          <h1 className="text-4xl font-bold text-black">
            Textos Para Aprender Inglês
          </h1>
          <p className="p-2 text-black text-xl">
            Os textos abaixo estão separados por níveis básicos (A1 e A2) e
            níveis intermediários (B1 e B2).
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <Card 
            title="A1 - Iniciante"
            links={["Greetings and Introductions", "My Daily Routine"
            , "Family Matters", "1"]}
          />
          <Card 
            title="A2 - Elementar"
            links={["Exploring My Hobbies", "Traveling Abroad", "Ordering Food at a Restaurant"]}
          />
          <Card 
            title="B1 - Intermediário"
            links={["At the Airport", "Shopping for Clothes", "Describing Your Home"]}
          />
          <Card 
            title="B2 - Intermediário Superior"
            links={["Health and Fitness", "Weather Talk", "Talking About Work", "Planning a Weekend Getaway", "Celebrating Holidays"]}
          />
        </div>
      </main>
  )
}