import { useState } from "react";
import Hall from "./components/Hall";
import SalleCardio from "./components/SalleCardio";
import SalleUrgences from "./components/SalleUrgences";
import SalleLaboratoire from "./components/SalleLaboratoire";
import SalleFinale from "./components/SalleFinale";

function App() {
  const [currentRoom, setCurrentRoom] = useState("hall");
  const [inventory, setInventory] = useState([]);

  const handleNext = (item, nextRoom) => {
    if (item) setInventory([...inventory, item]);
    if (nextRoom) setCurrentRoom(nextRoom);
  };

  return (
    <div className="p-4">
      {currentRoom === "hall" && <Hall onNext={() => handleNext("badge", "cardio")} />}
      {currentRoom === "cardio" && <SalleCardio onNext={() => handleNext("ECG enregistré", "urgences")} />}
      {currentRoom === "urgences" && <SalleUrgences onNext={() => handleNext("Gestes validés", "laboratoire")} />}
      {currentRoom === "laboratoire" && <SalleLaboratoire onNext={() => handleNext("Résultat validé", "finale")} />}
      {currentRoom === "finale" && <SalleFinale inventory={inventory} />}
    </div>
  );
}

export default App;
