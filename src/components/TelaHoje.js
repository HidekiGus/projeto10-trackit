import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function TelaHoje() {
    return (
        <>
            <Header></Header>
            <Footer></Footer>
        </>
    );
}