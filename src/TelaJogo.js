import React from "react"

export default function TelaJogo() {

    const dados = [
        {card: "Pergunta 1", question: "Quando Harry Potter nasceu?" },
        {card: "Pergunta 2", question: "Qual Horcrux foi a segunda a ser destruída?"},
        {card: "Pergunta 3", question: "No primeiro livro, em que andar fica o corredor proibido?"},
        {card: "Pergunta 4", question: "Qual herança Dumbledore deixa para Rony?"},
        {card: "Pergunta 5", question: "Quanto vale um galeão?"},
        {card: "Pergunra 6", question: "Quem protegeu Harry do Dementador no trem para Hogwarts?"},
        {card: "Pergunta 7", question: "O que Belatriz escreve no braço de Hermione?"},
        {card: "Pergunta 8", question: "Quem destrói o medalhão?"}
    ]

    return (

        <section className="tela">
            <div className="topoJogo">
                <img src="./Midias/image 2.png" alt="img2"></img>
                <span>ZapRecall</span>
            </div>



        {dados.map (elemento => <Cartas info = {elemento} />)}



            <div className="fundo">
                <p>0/4</p>
                <p>Concluídos</p>
            </div>
        </section>

    )
}

function Cartas(props) {
    

    const [card, setCard] = React.useState("card1")

    if (card === 'card1') {
        return (

            <div className="card1" onClick={() => setCard("card2")}>
                <p>{props.info.card}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>

        )
    } else if (card === 'card2') {
        return (
            <div className="Card2">
                <p className="questions">{props.info.question}</p>
            </div>
        )
    }

}