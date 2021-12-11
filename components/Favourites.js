import Image from "next/image";

export default function Favourites() {
  return (
    <div className="flex-evenly">
      <div className="flex-wrap flex-center ">
        <div className="img-width round">
          <Image className="img-width" src={"/images/ruinedchildhood.png"} alt={"Ruined Childhood Belgian Specialty Ale"} width={100} height={100} />
        </div>
        <h3 className="center">Ruined childhood</h3>
      </div>
      <div className="flex-wrap flex-center ">
        <div className="img-width round">
          <Image className="img-width" src={"/images/fairytaleale.png"} alt={"Fairy Tale Ale IPA"} width={100} height={100} />
        </div>
        <h3 className="center">Fairy Tale Ale</h3>
      </div>
      <div className="flex-wrap flex-center ">
        <div className="img-width round">
          <Image src={"/images/steampunk.png"} alt={"Steampunk California Common"} width={100} height={100} />
        </div>
        <h3 className="center">Steampunk</h3>
      </div>
    </div>
  );
}
