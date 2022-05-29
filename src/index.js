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

export default function App() {

    const [ fotoPerfil, setFotoPerfil ] = useState('https://static1-br.millenium.gg/articles/1/65/41/@/99138-thumb1-amp_main_media_schema-1.jpg');

    return (
        <ProfilePictureContext.Provider value={{ fotoPerfil, setFotoPerfil }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    {/* <Route path="/historico" element={<TelaHistorico />} /> */}
                </Routes>
            </BrowserRouter>
        </ProfilePictureContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));