import React from "react"

import FotoIcon from "../Midias/fotoicon.png";

export default function Cartas(props) {

    const {info, idx,} = props

    const [selecionado, setSelecionado] = React.useState("")

    const [card, setCard] = React.useState("card1")

    if (card === 'card1') {

        const css = `card1 ${selecionado}`

        return (

            <div className={css}>

                <p>Pergunta {idx}</p>
                {selecionado === "" && <ion-icon name="play-outline" onClick={() => setCard("card2")}></ion-icon>}
                {selecionado === "red" && <ion-icon name="close-circle-outline" style={{ color: "#D70900" }}></ion-icon>}
                {selecionado === "yellow" && <ion-icon name="help-circle-outline" style={{ color: "#FF922E" }}></ion-icon>}
                {selecionado === "green" && <ion-icon name="checkmark-circle" style={{ color: "#2FBE34" }}></ion-icon>}

            </div>

        )
    } else if (card === 'card2') {

        return (
            <div className="Card2" onClick={() => setCard("card3")}>
                <p className="questions">{info.question}</p>
                <img className="click" src={FotoIcon} alt="foto3" onClick={() => setCard("card3")}></img>
            </div>
        )
    } else if (card === 'card3') {

        function red() {
            setSelecionado("red")
            setCard('card1')
            props.aumentar()
            props.icon("red")
        }

        function yellow() {
            setSelecionado("yellow")
            setCard('card1')
            props.aumentar()
            props.icon("yellow")
        }

        function green() {
            setSelecionado("green")
            setCard('card1')
            props.aumentar()
            props.icon("green")
        }

        return (

            <div className="Card3">
                <p className="answer">{info.answer}</p>
                <div className="boxes">
                    <div className="box" onClick={red}>
                        <p>Não Lembrei</p>
                    </div>
                    <div className="box" onClick={yellow}>
                        <p>Quase não lembrei</p>
                    </div>
                    <div className="box" onClick={green}>
                        <p>Zap!</p>
                    </div>
                </div>
            </div>
        )
    }
}
