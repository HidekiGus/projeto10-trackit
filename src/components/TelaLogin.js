import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Logo from "../images/Logo.png";
import { useContext } from "react";
import ProfilePictureContext from "../contexts/ProfilePictureContext";


export default function TelaLogin() {  

    const { setFotoPerfil } = useContext(ProfilePictureContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isDisabled, setIsDisabled ] = useState(false);
    const navigate = useNavigate();

    function Logar(event) {

        event.preventDefault();

        const corpo = {
            email,
            password
        }


        function loginAprovado(response) {
            let a = response.data.image;
            setFotoPerfil(a);
            console.log(a);
            navigate("/habitos");
        }

        function loginReprovado() {
            alert("Confira os dados inseridos");
            setIsDisabled(false);
        }

        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", corpo);

        promessa.then(loginAprovado);
        promessa.catch(loginReprovado);


    }
    
    return (
            <Tela>
                <img src={Logo} />
                <form onSubmit={Logar}>
                    <input required placeholder="email" type="text" disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input required placeholder="senha" type="password" disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button disabled={isDisabled} type="submit">Entrar</button> 
                </form>
                <Link to="/cadastro" style={{ textDecoration: "none" }}>
                    <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
                </Link>
            </Tela>
    );
}


const Tela = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    form {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 50vw;
        height: fit-content;

        margin-top: 10vh;
        margin-bottom: 8vh;
    }

    input {
    width: 80vw;
    height: 8vh;
    
    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 30px;

    box-sizing: border-box;
    padding-left: 10px;
    margin-bottom: 10px;

    ::placeholder {
        color: #DBDBDB;
    }
    }

    button {
    width: 80vw;
    height: 8vh;

    border-radius: 5px;
    border: 1px solid #52b652;

    background-color: #52B6FF;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 31px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    }
`;

const Cadastro = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 30px;
`