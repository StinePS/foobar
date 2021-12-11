export default function NowPrepping({ queue }) {
  return (
    <div className="flex-wrap">
      {queue?.map((queue) => (
        <article key={queue.id}>
          <h3 className="terti-bg sec-txt order-numbers">{queue.id}</h3>
        </article>
      ))}
    </div>
  );
}
