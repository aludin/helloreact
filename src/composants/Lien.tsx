import React from 'react';
import "./Lien.css";

type LienAvecTexte = {
    lien: string;
    texte: string;
}

type ParametresLiens = {
    liensAvecTexte: Array<LienAvecTexte>;
}

const Lien = (props: ParametresLiens) => {
    const { liensAvecTexte } = props;
    return (
        <>{
            liensAvecTexte.map((valeur) => {
                return <a
                    className="App-link"
                    href={valeur.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {valeur.texte}
                </a>
            })}
        </>
    );

}

export default Lien;