export default function SalleFinale({ inventory }) {
  const handleCure = () => {
    if (inventory.length >= 4) {
      alert("Félicitations ! Vous avez créé le médicament !");
    } else {
      alert("Il vous manque des ingrédients !");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Pharmacie</h2>
      <p>Mélangez vos ingrédients pour créer le médicament :</p>
      <button className="m-2 p-2 bg-yellow-500 text-black" onClick={handleCure}>Créer le médicament</button>
    </div>
  );
}
