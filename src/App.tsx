import React from 'react';

import Lien from "./composants/Lien"


import './App.css';

function App() {
  const liensAvecTexte = [
    { lien: "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal", texte: "Wikipédia" },
    { lien: "https://www.lemonde.fr/", texte: "Journal Le Monde" },
    { lien: "https://www.imdb.com/", texte: "Imdb" }

  ]
  return (
    <div className="App">
      <header className="App-header">
        <Lien liensAvecTexte={liensAvecTexte} />
      </header>
    </div>
  );
}


export default App;
