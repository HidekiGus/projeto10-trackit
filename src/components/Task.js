import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import TasksContext from "../contexts/TasksContext";

import Header from "./Header";
import Footer from "./Footer";
import CriarHabito from "./CriarHabito";
import Lixeira from "../images/Vector.png";


export default function Task({ id, titulo, dias }) {

    const [ diasSemana, setDiasSemana ] = useState(['D', 'S', 'T', 'Q', 'Q', 'S', 'S']);
    const [ diasSelecionados, setDiasSelecionados ] = useState([false, false, false, false, false, false, false]);

    const { tasks, setTasks } = useContext(TasksContext);

    function traduzDiasSelecionados() {
        for (let i=0; i<dias.length; i++) {
            diasSelecionados[dias[i]] = true;
        }
    }

    traduzDiasSelecionados();

    return (
        <TelaTask>
            <Informacoes>
                <h1>{titulo}</h1>
                <Dias>
                    {diasSemana.map((dia, index) => {
                        return (<Dia key={index} isDiaSelecionado={diasSelecionados[index]} >{dia}</Dia>)
                    })}
                </Dias>
            </Informacoes>
            <Icone>
                <img src={Lixeira}></img>
            </Icone>
        </TelaTask>
    );
}

const TelaTask = styled.div`
    width: 90vw;
    height: 10vh;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    flex-direction: row;

    margin-left: 5vw;
    margin-bottom: 2vh;

    border-radius: 5px;

    h1 {
        font-size: 20px;
        font-family: 'Lexend Deca';
        margin-left: 3vw;
        padding-top: 1vh;
    }
`

const Informacoes = styled.div`
    width: 83vw;
    height: 10vh;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 20px;
        font-family: 'Lexend Deca';
        margin-left: 3vw;
        padding-top: 1vh;
    }
`

const Icone = styled.div`
    width: 7vw;
    height: 10vh;
    
    font-size: 25px;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    margin-top: 15px;

    img{
        max-width: 100%;
    }
`

const Dias = styled.div`
    width: fit-content;
    height: 50px; 

    display: flex;
    align-items: center;

    margin-left: 3vw;
`

const Dia = styled.div`
    width: 30px;
    height: 30px; 

    background-color: ${(props) => props.isDiaSelecionado ? "#CFCFCF" : "#FFFFFF"};
    color: ${(props) => props.isDiaSelecionado ? "#FFFFFF" : "#DBDBDB"};

    margin: 0 3px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-family: 'Lexend Deca';

    border: 1px solid ${(props) => props.isDiaSelecionado ? "#CFCFCF" : "#D5D5D5" };
    border-radius: 5px;
`;