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

    const [contador, setContador] = React.useState(0)

    const [iconFotter, setIconFootter] = React.useState([])

    const aumentar = () => { setContador(contador + 1) }

    const icon = (icone) => { setIconFootter([...iconFotter, icone]) }

    console.log(iconFotter)

    return (

        <section className="tela">

            

                <div className="topoJogo">
                    <img src="./Midias/raio2.png" alt="img2"></img>
                    <span> ZapRecall </span>
                </div>
            
            <div className="conteudo">

                {dados.map(elemento => <Cartas key={elemento} aumentar={aumentar} icon={icon} info={elemento} />)}

            </div>
            <Footer icon={iconFotter} contador={contador} />
        </section>

    )
}

function Footer(props) {

    let redArr = []
    let contadorArr = []

    for (let i = 0; i < props.icon.length; i++) {

        if (props.icon[i] === "red") {
            redArr.push(props.icon[i])
            contadorArr.push(props.icon[i])
        } else {
            contadorArr.push(props.icon[i])
        }

    }

    console.log(redArr)
    console.log(contadorArr)

    let parabens = redArr.length === 0 && contadorArr.length === 8;
    let putz = redArr.length > 0 && contadorArr.length === 8

    const mensagemParabens =

        <div className="caixa-mensagem">
            <div className="caixa">
                <img src="./Midias/party.png" className="foto-caixa"></img>
                <p><strong>Parabéns!</strong></p>
            </div>
            <p>Você não esqueceu de <br /> nenhum flashcard!</p>
        </div>

    const mensagemPutz =

        <div className="caixa-mensagem">
            <div className="caixa">
                <img src="./Midias/sad.png" className="foto-caixa"></img>
                <p><strong>Putz...</strong></p>
            </div>
            <p>Ainda faltam alguns... <br /> Mas não desanime!</p>
        </div>


    return (

        <div className="fundo">

            {parabens && mensagemParabens}
            {putz && mensagemPutz}

            <p className="contador">{props.contador}/8 Concluídos </p>

            <div className="fundo-icons">
                {props.icon.map(elemento => {
                
                    if (elemento === 'red') {
                        return <ion-icon name="close-circle-outline" style={{ color: "#D70900" }}></ion-icon>
                    } else if (elemento === 'yellow') {
                        return <ion-icon name="help-circle-outline" style={{ color: "#FF922E" }}></ion-icon>
                    } else if (elemento === 'green') {
                        return <ion-icon name="checkmark-circle-outline" style={{ color: "#2FBE34" }}></ion-icon>
                    }
                })}
            </div>
        </div>
    )
}

function Cartas(props) {

    const [selecionado, setSelecionado] = React.useState("")

    const [card, setCard] = React.useState("card1")


    if (card === 'card1') {

        const css = `card1 ${selecionado}`

        return (

            <div className={css}>

                <p>{props.info.card}</p>
                {selecionado === "" && <ion-icon name="play-outline" onClick={() => setCard("card2")}></ion-icon>}
                {selecionado === "red" && <ion-icon name="close-circle-outline" style={{ color: "#D70900" }}></ion-icon>}
                {selecionado === "yellow" && <ion-icon name="help-circle-outline" style={{ color: "#FF922E" }}></ion-icon>}
                {selecionado === "green" && <ion-icon name="checkmark-circle-outline" style={{ color: "#2FBE34" }}></ion-icon>}

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

