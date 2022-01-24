import Image from "next/image";

// Find the correct img file
function generateImagePath(name) {
  const lowerName = name.toLowerCase().replaceAll(" ", "");
  const namePath = `/images/${lowerName}.jpg`;
  return namePath;
}

// Map over each bartender to create a div with a round image and the bartender's name
export default function Bartenders({ bartenders }) {
  return (
    <div className="flex-evenly">
      {bartenders?.map((bartender) => (
        <div key={bartender.name}>
          <div className="round">
            <Image className="img-width" src={generateImagePath(bartender.name)} alt={`${bartender.name} the bartender`} width={100} height={100} />
            <h3 className="center">{bartender.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
