interface CardProps {
  title: string;
  links: string[];
}

export function Card(props: CardProps) {
  return (
    <div className="w-auto p-4 bg-gray-50 h-auto rounded-md">
      <h2 className="p-2 text-3xl font-bold text-black">{props.title}</h2>
      <div className="p-4 flex flex-col">
        {props.links.map((link, index) => (
          <a key={index} href="#" className="text-black hover:text-red-600 hover:underline transition duration-300 font-semibold">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
