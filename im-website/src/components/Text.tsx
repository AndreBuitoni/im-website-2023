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
      <div className="flex gap-2">
        {/* Seção do Texto */}
        <div className="bg-gray-200 py-6 px-12 w-7/12 rounded">
          <h1 className="text-slate-950 font-bold text-2xl">{textToDisplay.title}</h1>
          <div className="text-slate-950 text-l py-4" dangerouslySetInnerHTML={{ __html: textToDisplay.content as string}}></div>
        </div>

        {/* Seção do Glossário */}
        <div className="bg-gray-200 p-4 w-5/12 rounded">
        <h1 className="text-slate-950 font-bold text-2xl">Glossary</h1>
        <div className="text-slate-950 text-l py-4" dangerouslySetInnerHTML={{ __html: textToDisplay.glossary as string}}></div>
        </div>
      </div>
    </>
  );
}
