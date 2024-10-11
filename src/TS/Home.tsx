import React from "react";
import '../CSS/home.css';
import Fundinho from '../MÍDIA/fundinho.png'
import Mulher1 from '../MÍDIA/mulher1.png'

export default function Home(){
    return(
        <div className="Home">
            <main className="main">
                <img src={Fundinho} alt="fundinho" />
                <div className="textinho">
                    <p className="linha1">Seu espaço para explorar, </p>
                    <p className="linha2">criar e compartilhar -</p> 
                    <p className="linha3">Woman Space.</p>
                </div>
                <img src={Mulher1} alt="mulher 1" className="mulher1" />
                <div className="botoes">
                    <button className="b-login">Login</button>
                    <button className="b-cadastro">Cadastro</button>
                </div>
            </main>
        </div>
    )
}