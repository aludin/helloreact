import React, { useState } from "react";


const FoisDeux = () => {
    const [valeur, setValeur] = useState<string>("");

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValeur(event.target.value);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "50px", justifyContent: "space-between" }}>
            <input onChange={onChangeHandler} value={valeur} />
            <input value={+valeur * 2} />
        </div>
    )
}

export default FoisDeux;