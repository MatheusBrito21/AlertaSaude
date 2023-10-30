import React from "react";
import './Nav.css'
import { Button } from 'antd';
// import { Link } from "react-router-dom";

export default props =>
    <div className="nav">
        <div className="logo">
            
        </div>
        <div className="botoes">
            <a href="home"><Button type="primary" className="botao">Home</Button></a>
            <a href="sobre"><Button type="primary" className="botao">Sobre</Button></a>
            <a href="como-funciona"><Button type="primary" className="botao">Como Funciona</Button></a>
            <a href="diferenciais"><Button type="primary" className="botao">Diferenciais</Button></a>
            <a href="doencas"><Button type="primary" className="botao">Doenças</Button></a>
            <a href="representante"><Button type="primary" className="botao">Representante</Button></a>
        </div>
    </div>