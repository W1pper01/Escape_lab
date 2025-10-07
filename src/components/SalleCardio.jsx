export default function SalleCardio({ onNext }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Cardiologie</h2>
      <p>Quel est le rythme cardiaque ?</p>
      <button className="m-2 p-2 bg-green-500 text-white" onClick={onNext}>Tachycardie</button>
    </div>
  );
}
