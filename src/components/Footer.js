import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


export default function Footer() {

    const navigate = useNavigate();

    function irPraTelaHabitos() {
        navigate("/habitos");
    }

    function irPraTelaHistorico() {
        navigate("/historico");
    }

    function irPraTelaHoje() {
        navigate("/hoje");
    }

    return (
        <TelaFooter>
            <h1 onClick={irPraTelaHabitos}>Hábitos</h1>
            <h1 onClick={irPraTelaHoje}>Hoje</h1>
            <h1 onClick={irPraTelaHistorico}>Histórico</h1>
        </TelaFooter>
    );
}

const TelaFooter = styled.div`
    width: 100vw;
    height: 9vh;
    background-color: #126BA5;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    bottom: 0;

    h1 {
        margin-left: 40px;
        margin-right: 40px;
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #52B6FF;
    }

`
