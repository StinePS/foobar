export default function Bartenders({ bartenders }) {
  return (
    <div>
      {bartenders?.map((bartenders) => (
        <article key={bartenders.name}>
          <h3>{bartenders.name}</h3>
        </article>
      ))}
    </div>
  );
}
