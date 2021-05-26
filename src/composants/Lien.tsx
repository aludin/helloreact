import React from 'react';
import "./Lien.css";

type ParametresLiens = {
    lien: string;
    texte: string;
}

const Lien = (props: ParametresLiens) => {
    const { lien, texte } = props;
    return (
        <a
            className="App-link"
            href={lien}
            target="_blank"
            rel="noopener noreferrer"
        >
            {texte}
        </a>
    )
}

export default Lien;