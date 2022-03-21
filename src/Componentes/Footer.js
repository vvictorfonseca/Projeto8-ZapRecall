import React from "react"

import Happy from "../Midias/party.png";
import Sad from "../Midias/sad.png";

export default function Footer(props) {

    const {icon, contador} = props

    let redArr = []
    let contadorArr = []

    for (let i = 0; i < icon.length; i++) {

        if (icon[i] === "red") {
            redArr.push(icon[i])
            contadorArr.push(icon[i])
        } else {
            contadorArr.push(icon[i])
        }
    }

    let parabens = redArr.length === 0 && contadorArr.length === 8;
    let putz = redArr.length > 0 && contadorArr.length === 8;

    const mensagemParabens =

        <div className="caixa-mensagem">
            <div className="caixa">
                <img src={Happy} alt="foto4" className="foto-caixa"></img>
                <p><strong>Parabéns!</strong></p>
            </div>
            <p>Você não esqueceu de <br /> nenhum flashcard!</p>
        </div>

    const mensagemPutz =

        <div className="caixa-mensagem">
            <div className="caixa">
                <img src={Sad} alt="foto5" className="foto-caixa"></img>
                <p><strong>Putz...</strong></p>
            </div>
            <p>Ainda faltam alguns... <br /> Mas não desanime!</p>
        </div>

    return (

        <div className="fundo">

            {parabens && mensagemParabens}
            {putz && mensagemPutz}

            <p className="contador">{contador}/8 Concluídos </p>

            <div className="fundo-icons">
                {icon.map(elemento => {

                    if (elemento === 'red') {
                        return <ion-icon name="close-circle-outline" style={{ color: "#D70900" }}></ion-icon>
                    } else if (elemento === 'yellow') {
                        return <ion-icon name="help-circle-outline" style={{ color: "#FF922E" }}></ion-icon>
                    } else if (elemento === 'green') {
                        return <ion-icon name="checkmark-circle" style={{ color: "#2FBE34" }}></ion-icon>
                    }
                })}
            </div>
        </div>
    )
}