export default function CurrentStock({ storage }) {
  return (
    // Map over each item in storage and create an article for each
    <div className="grid-2">
      {storage?.map((storage) => (
        <article className="beer-card" key={storage.name}>
          <h3>{storage.name}</h3>
          <p>{`${storage.amount} kegs`}</p>
        </article>
      ))}
    </div>
  );
}
