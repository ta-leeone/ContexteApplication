import { createContext, useState } from "react";



const CompteurContext = createContext();

// Composant fournisseur du contexte
export function CompteurContextProvider  (props) {
  const [compteur, setCompteur] = useState(0);

  const incrementCompteur = () => {
    setCompteur(compteur + 1);
  };

  return (
    <CompteurContext.Provider value={{ compteur, incrementCompteur }}>
      {props.children}
    </CompteurContext.Provider>
  );
};

export default CompteurContext;