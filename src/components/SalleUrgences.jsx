export default function SalleUrgences({ onNext }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Urgences</h2>
      <p>Effectuez le bon geste pour une urgence :</p>
      <button className="m-2 p-2 bg-red-500 text-white" onClick={onNext}>Gestes corrects</button>
    </div>
  );
}
