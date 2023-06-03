import './Button.css';
import { useContext } from "react";

import CompteurContext from "./CompteurContext";

export function Button () {
    const { compteur, incrementCompteur } = useContext(CompteurContext);
  
    return (
      <div className="btn">
        <p>Compteur: {compteur}</p>
        <button onClick={incrementCompteur}>Incrémenter</button>
      </div>
    );
  };

  export default Button;