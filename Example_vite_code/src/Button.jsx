export default function Button({ setQuantity }) {
  return (
    <div>
      <button className="button"
        onClick={() => {
          setQuantity((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
