import React from 'react';

import Lien from "./composants/Lien"


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lien lien="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal" texte="Wikipédia" />
      </header>
    </div>
  );
}


export default App;
