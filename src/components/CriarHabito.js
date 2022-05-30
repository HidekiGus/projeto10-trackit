import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import TasksContext from "../contexts/TasksContext";
import TokenContext from "../contexts/TokenContext";

import { ThreeDots } from "react-loader-spinner";

export default function CriarHabito({ setIsCriarHabitoAtivo }) {

    const { token, setToken } = useContext(TokenContext);
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ nomeHabitoSendoCriado, setNomeHabitoSendoCriado ] = useState('');
    const [ diasSemana, setDiasSemana ] = useState(['D', 'S', 'T', 'Q', 'Q', 'S', 'S']);
    const [ diasSelecionados, setDiasSelecionados ] = useState([false, false, false, false, false, false, false]);

    function diaSelecionado(index) {
    if (diasSelecionados[index] === false) {
        let novaArray = [...diasSelecionados];
        novaArray[index] = true;
        setDiasSelecionados(novaArray);
    } else {
        let novaArray = [...diasSelecionados];
        novaArray[index] = false;
        setDiasSelecionados(novaArray);
    }
    }

    function fecharCaixaCriacao() {
        setIsCriarHabitoAtivo(false);
    }

    function analisarDiasSelecionados() {
        let diasSelecionadosNumerados = [];
        for (let i=0; i<diasSemana.length ;i++ ) {
            if (diasSelecionados[i] === true) {
                diasSelecionadosNumerados.push(i);
            }
        }
        return diasSelecionadosNumerados;
    }

    function confirmarCriacao() {
        setIsDisabled(true);
        let dias = analisarDiasSelecionados();
        let corpoRequisicao = {
            name: {nomeHabitoSendoCriado},
            days: {dias}
        }

        let config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        if (window.confirm("Você confirma a criação desse hábito?") === true) {
            let promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", corpoRequisicao, {headers: config});

            promessa.then((response) => {
                console.log("prpont");
                setIsCriarHabitoAtivo(false);
                console.log(response)
            })
            console.log("confirmo");
        } else {
            console.log("nao");
        }
        setIsDisabled(false);
    }

    console.log(diasSelecionados);

    return (
        <>
            <TelaCriarHabito>
                <input disabled={isDisabled} type="text" value={nomeHabitoSendoCriado} placeholder="nome do hábito" onChange={(e) => setNomeHabitoSendoCriado(e.target.value)}/>
                <Dias>
                    {diasSemana.map((dia, index) => {
                        return (<Dia disabled={isDisabled} key={index} isDiaSelecionado={diasSelecionados[index]} onClick={() => diaSelecionado(index)}>{dia}</Dia>)
                    })}
                </Dias>
                <BotoesCriarHabito>
                    <BotaoCancelarCriacao disabled={isDisabled} onClick={fecharCaixaCriacao}>Cancelar</BotaoCancelarCriacao>
                    <BotaoSalvarCriacao onClick={confirmarCriacao}>Salvar</BotaoSalvarCriacao>
                </BotoesCriarHabito>
            </TelaCriarHabito>
        </>
    );
}

const TelaCriarHabito = styled.div`
    width: 90vw;
    height: 20vh;
    background-color: #FFFFFF;

    margin: 0 5vw 2vh;

    border-radius: 5px;


    input {
        width: 80vw;
        height: 5vh;
        margin: 2vh 4vw 0;
        padding-left: 10px;

        border-radius: 5px;
        border: 1px solid #D4D4D4;

        font-size: 20px;
        font-family: 'Lexend Deca';

        ::placeholder {
            color: #DBDBDB;
        }
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

const BotoesCriarHabito = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: flex-end;

    margin-top: 10px;
`

const BotaoCancelarCriacao = styled.div`
    width: 90px;
    height: 35px;

    font-size: 16px;
    font-family: 'Lexend Deca';

    color: #52B6FF;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 15px;
`

const BotaoSalvarCriacao = styled.div`
    width: 90px;
    height: 35px;

    font-size: 16px;
    font-family: 'Lexend Deca';

    color: #FFFFFF;
    background-color: #52B6FF;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    margin-right: 15px;
`