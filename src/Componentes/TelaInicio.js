import React from "react"

import RaioInicio from "../Midias/raio1.png";

import TelaJogo from "./TelaJogo"

export default function TelaInicio() {

    const [visivel, setVisivel] = React.useState(true)
    
    if (visivel) {

        return (

            <section className="tela">
                <img className="raio" src={RaioInicio} alt="img1"></img>
                <h1>ZapRecall</h1>
                <button onClick={() => setVisivel(false)}>Iniciar Recall!</button>
            </section>
        )
    } else {
        
        return (
            <TelaJogo />
        )
    }
}