import React from 'react';
import { Link } from 'react-router-dom'; // Importante para o botão de voltar
import './NotFound.scss'; // Vamos criar agora

const ErroDePagina = () => {
    return (
       <section className="erro-container">
            <h1>404</h1>
            <h2>Ops! Página não encontrada.</h2>
            <p>Parece que você se perdeu no caminho.</p>
            
            {/* Botão para voltar para Home */}
            <Link to="/" className="botao-voltar">
                Voltar para o Início
            </Link>
        </section>
    )
}
export default ErroDePagina;