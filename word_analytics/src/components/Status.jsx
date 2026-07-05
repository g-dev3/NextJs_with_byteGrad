export default function Status({ stat }) {
  return (
    <section className="stats">
      <Stat number={stat.numberOfWords} label={"words"} />
      <Stat number={stat.numberOfCharaters} label={"characters"} />
      <Stat number={stat.instagramCharatersLeft} label={"instagram"} />
      <Stat number={stat.facbookCharatersLeft} label={"facebook"} />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
