import React from "react"

export default function TelaJogo() {

    const dados = [
        { card: "Pergunta 1", question: "Quando Harry Potter nasceu?", answer: "31 de julho de 1980" },
        { card: "Pergunta 2", question: "Qual Horcrux foi a segunda a ser destruída?", answer: "Anel da sonserina" },
        { card: "Pergunta 3", question: "No primeiro livro, em que andar fica o corredor proibido?", answer: "Terceiro andar" },
        { card: "Pergunta 4", question: "Qual herança Dumbledore deixa para Rony?", answer: " O desiluminador" },
        { card: "Pergunta 5", question: "Quanto vale um galeão?", answer: "17 Sicles" },
        { card: "Pergunra 6", question: "Quem protegeu Harry do Dementador no trem para Hogwarts?", answer: "Remus John Lupin" },
        { card: "Pergunta 7", question: "O que Belatriz escreve no braço de Hermione?", answer: "Sangue-ruim" },
        { card: "Pergunta 8", question: "Quem destrói o medalhão?", answer: "Ronald Weasley" }
    ]

    const contador = 0

    return (

        <section className="tela">
            <div className="topoJogo">
                <img src="./Midias/image 2.png" alt="img2"></img>
                <span>ZapRecall</span>
            </div>


            {dados.map(elemento => <Cartas info={elemento} />)}


            <div className="fundo">
                <p>{contador}/8 Concluídos </p>
            </div>
        </section>

    )
}

function Cartas(props) {

    const [selecionado, setSelecionado] = React.useState("")

    const [card, setCard] = React.useState("card1")


    if (card === 'card1') {

        return (

            <div className={`card1 ${selecionado}`} onClick={() => setCard("card2")}>
                <p>{props.info.card}</p>
                {selecionado === "" && <ion-icon name="play-outline"></ion-icon>}
                {selecionado === "red" && <ion-icon name="close-circle-outline"></ion-icon>}
                {selecionado === "yellow" && <ion-icon name="help-circle-outline"></ion-icon>}
                {selecionado === "green" && <ion-icon name="checkmark-circle-outline"></ion-icon>}
                
            </div>

        )
    } else if (card === 'card2') {

        return (
            <div className="Card2" onClick={() => setCard("card3")}>
                <p className="questions">{props.info.question}</p>
                <img className="click" src="./Midias/fotoicon.png" onClick={() => setCard("card3")}></img>
            </div>
        )
    } else if (card === 'card3') {

        function red() {
            setSelecionado("red")
            setCard('card1')
        }

        function yellow() {
            setSelecionado("yellow")
            setCard('card1')
        }

        function green() {
            setSelecionado("green")
            setCard('card1')
        }

        return (
            <div className="Card3">
                <p className="answer">{props.info.answer}</p>
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

