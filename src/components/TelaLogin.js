import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Logo from "../images/Logo.png";



export default function TelaLogin() {
    return (
            <Tela>
                <img src={Logo} />
                <Input placeholder="email"></Input>
                <Input placeholder="senha" disabled={true}></Input>
                <Link to="/habitos">
                    <Botao>Entrar</Botao>
                </Link>
                <Link to="/cadastro" style={{ textDecoration: "none" }}>
                    <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
                </Link>
            </Tela>
    );
}

function CaixaInput() {
    return
}

const Tela = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    img {
        width: 50vw;
        height: fit-content;

        margin-top: 10vh;
        margin-bottom: 8vh;
    }
`;

const Input = styled.input`
    width: 80vw;
    height: 8vh;
    
    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 30px;
    color: #DBDBDB;

    box-sizing: border-box;

    padding-left: 10px;

    margin-bottom: 10px;
`

const Botao = styled.div`
    width: 80vw;
    height: 8vh;

    border-radius: 5px;

    background-color: #52B6FF;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 31px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Cadastro = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 30px;
`