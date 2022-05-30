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

export default function TelaHabitos() {

    const [ isCriarHabitoAtivo, setIsCriarHabitoAtivo ] = useState(false);
    const { tasks, setTasks } = useContext(TasksContext);


    return (
        <>
        <Header></Header>
        <TopoMeusHabitos>
            <h1>Meus hábitos</h1>
            <button onClick={() => setIsCriarHabitoAtivo(true)}>+</button>
        </TopoMeusHabitos>
        <MeusHabitos>
            {isCriarHabitoAtivo ? <CriarHabito setIsCriarHabitoAtivo={setIsCriarHabitoAtivo} /> : null}
            {tasks.length === 0 ? <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2> : "" }
        </MeusHabitos>
        <Footer></Footer>
        </>
    );
}

const TopoMeusHabitos = styled.div`
    width: 100vw;
    height: 9vh;

    margin-top: 9vh;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #E5E5E5;

    h1 {
        font-size: 23px;
        font-family: 'Lexend Deca';
        margin-left: 20px;
        color: #126ba5;
    }

    button {
        width: 40px;
        height: 40px;
        
        background-color: #52B6FF;

        border-radius: 5px;
        border: 1px solid #52B6FF;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 30px;
        color: #FFFFFF;

        margin-right: 20px;;
    }
`

const MeusHabitos = styled.div`

    width: 100vw;
    height: 73vh;
    background-color: #E5E5E5;

    h2 {
            font-size: 18px;
            font-family: 'Lexend Deca';
            margin: 0px 20px;
            color: #666666;
        }
`

