import Image from "next/image";

function generateImagePath(name) {
  const lowerName = name.toLowerCase().replaceAll(" ", "");
  const namePath = `/images/${lowerName}.jpg`;
  return namePath;
}

export default function Bartenders({ bartenders }) {
  return (
    <div className="flex-justify">
      {bartenders?.map((bartender) => (
        <article key={bartender.name}>
          <div className="round-edges">
            <Image src={generateImagePath(bartender.name)} alt={`${bartender.name} the bartender`} width={150} height={150} />
            <h3 className="center">{bartender.name}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
