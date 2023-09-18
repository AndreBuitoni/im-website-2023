import { useParams } from "react-router-dom";
import database from '../database.json' 

export function Text() {
  const { title } = useParams();
  console.log({title})
  const textToDisplay = database.texts.find((text) => text.title === title)

  if (!textToDisplay) {
    return <div>Text not found</div>;
  }

  return (
    <>
      <h1>Welcome to</h1>
      <h1>Page {title} </h1>
      <div className="flex gap-2">
        <div className="bg-gray-200 py-6 px-12 w-8/12 rounded">
          <h1 className="text-slate-950 font-bold text-2xl">{textToDisplay.title}</h1>
          <p className="text-slate-950 text-xl py-4">{textToDisplay.paragraph1}</p>
          <p className="text-slate-950 text-xl py-4">{textToDisplay.paragraph2}</p>
          <p className="text-slate-950 text-xl py-4">{textToDisplay.paragraph3}</p>
          <p className="text-slate-950 text-xl py-4">{textToDisplay.paragraph4}</p>
          <p className="text-slate-950 text-xl py-4">{textToDisplay.paragraph5}</p>
        </div>
        <div className="bg-gray-200 p-4 w-4/12 rounded">
        <h1 className="text-slate-950 font-bold text-2xl">Glossary</h1>
        </div>
      </div>
    </>
  );
}
