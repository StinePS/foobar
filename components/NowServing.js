export default function NowServing({ serving }) {
  return (
    <div className="flex-wrap">
      {serving?.map((serving) => (
        <article key={serving.id}>
          <h3 className="terti-bg sec-txt">{serving.id}</h3>
        </article>
      ))}
    </div>
  );
}
