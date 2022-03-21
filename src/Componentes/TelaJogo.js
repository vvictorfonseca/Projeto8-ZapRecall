import React from "react"
import Cartas from "./Cartas"
import Footer from "./Footer"

import RaioTopo from "../Midias/raio2.png";

export default function TelaJogo() {

    const dados = [
        { question: "Quando Harry Potter nasceu?", answer: "31 de julho de 1980" },
        { question: "Qual Horcrux foi a segunda a ser destruída?", answer: "Anel da sonserina" },
        { question: "No primeiro livro, em que andar fica o corredor proibido?", answer: "Terceiro andar" },
        { question: "Qual herança Dumbledore deixa para Rony?", answer: " O desiluminador" },
        { question: "Quanto vale um galeão?", answer: "17 Sicles" },
        { question: "Quem protegeu Harry do Dementador no trem para Hogwarts?", answer: "Remus John Lupin" },
        { question: "O que Belatriz escreve no braço de Hermione?", answer: "Sangue-ruim" },
        { question: "Quem destrói o medalhão?", answer: "Ronald Weasley" }
    ]

    const [contador, setContador] = React.useState(0)
    const [iconFotter, setIconFootter] = React.useState([])

    const aumentar = () => { setContador(contador + 1) }
    const icon = (icone) => { setIconFootter([...iconFotter, icone]) }

    return (

        <section className="tela">
            
            <div className="topoJogo">
                <img src={RaioTopo} alt="img2"></img>
                <span> ZapRecall </span>
            </div>

            <div className="conteudo">

                {dados.sort(embaralhar).map((elemento, idx) => <Cartas aumentar={aumentar} icon={icon} info={elemento} idx={idx + 1} />)}

            </div>
            
            <Footer icon={iconFotter} contador={contador} />
        
        </section>
    )
}

function embaralhar() {
    return Math.random() - 0.5;
}