"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

export default function Dogs(){

    const [racas, alteraRacas] = useState([]);
    const [racasAleatorias, alteraRacasAleatorias] = useState([]);
    const [imagens, alteraImagens] = useState([]);

    function buscarRacas(){
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
            alteraRacas(Object.keys(response.data.message))
        })
    }

    function buscarImagens(nomeRaca){
        axios.get(`https://dog.ceo/api/breed/${nomeRaca}/images/random/10`)
        .then(function(response){
            alteraImagens(response.data.message)
        })
    }

    function buscarImagensAleatorias(){
        axios.get("https://dog.ceo/api/breeds/image/random/20")
        .then(function(response){
            alteraImagens(response.data.message)
        })
    }

    useEffect(()=>{
        buscarImagensAleatorias();
        buscarRacas();   
    }, [])

    return(
        <div id="dog">
            <h1> Dogs </h1>
            <p> Consulte e encontre fotos de cachorros fofos.</p>
            <div className="layout-central">

                <div className="layout-menu">
                    <ul> 
                        <li id="imagensAleatorias" onClick={()=> buscarImagensAleatorias()} > Todas as raças </li>
                        {racas.map(z => <li onClick={()=> buscarImagens(z)} key={z}> {z} </li>)} 
                    </ul>
                </div>

                <div >
                    <h2>Pitbull</h2>
                    {imagens.map((x, index) => <img src={x} key={index} alt={`Imagem ${index}`} />)} 
                </div>

            </div>
        </div>
    )
}
