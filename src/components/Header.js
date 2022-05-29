import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";

export default function Header({ fotoPerfil }) {

    return (
        <TelaHeader>
            <h1>TrackIt</h1>
            <FotoPerfil src={fotoPerfil} alt="" />
        </TelaHeader>
    );
}

const TelaHeader = styled.div`
    width: 100vw;
    height: 9vh;
    background-color: #126BA5;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        margin-left: 20px;
        font-family: 'Playball';
        font-size: 40px;
        color: #FFFFFF;
    }
`

const FotoPerfil = styled.img`
    border-radius: 98px;
    width: fit-content;
    height: 70%;

    margin-right: 20px;

`