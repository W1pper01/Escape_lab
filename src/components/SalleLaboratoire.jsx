export default function SalleLaboratoire({ onNext }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Laboratoire</h2>
      <p>Quel test montre une anémie ?</p>
      <button className="m-2 p-2 bg-purple-500 text-white" onClick={onNext}>Anémie</button>
    </div>
  );
}
