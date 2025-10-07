export default function Hall({ onNext }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Hall d'accueil</h2>
      <p>Choisissez le bon service pour le patient :</p>
      <button className="m-2 p-2 bg-blue-500 text-white" onClick={onNext}>Cardiologie</button>
    </div>
  );
}
