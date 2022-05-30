import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import "./reset.css"

import TelaLogin from "./components/TelaLogin";
import TelaCadastro from "./components/TelaCadastro";
import TelaHabitos from "./components/TelaHabitos";
import TelaHoje from "./components/TelaHoje";
import ProfilePictureContext from "./contexts/ProfilePictureContext";
import TasksContext from "./contexts/TasksContext";
import TokenContext from "./contexts/TokenContext";

export default function App() {

    const [ fotoPerfil, setFotoPerfil ] = useState('');
    const [ tasks, setTasks ] = useState([]);
    const [ token, setToken ] = useState('');

    return (
        <ProfilePictureContext.Provider value={{ fotoPerfil, setFotoPerfil }}>
            <TasksContext.Provider value={{ tasks, setTasks }}>
                <TokenContext.Provider value={{ token, setToken }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TelaLogin />} />
                            <Route path="/cadastro" element={<TelaCadastro />} />
                            <Route path="/habitos" element={<TelaHabitos />} />
                            <Route path="/hoje" element={<TelaHoje />} />
                            {/* <Route path="/historico" element={<TelaHistorico />} /> */}
                        </Routes>
                    </BrowserRouter>
                </TokenContext.Provider>
            </TasksContext.Provider>
        </ProfilePictureContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));