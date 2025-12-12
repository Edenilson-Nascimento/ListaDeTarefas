import React from 'react';
import './Sobre.scss'; // Já vamos criar esse arquivo

const Sobre = () => {
  return (
    <section className="sobre-container">
      <div className="foto-perfil">
        {/* Imagem placeholder - pode trocar por uma sua depois */}
        <img src="https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=170667a&w=0&k=20&c=PUbPLeqCny_1he19LE-wUtxip8mDVeiVvCzOkdBat4M=" alt="Avatar" />
      </div>
      
      <div className="conteudo-texto">
        <h1>Sobre o Projeto</h1>
        <p>
          Esta é uma aplicação de lista de tarefas desenvolvida para treinar
          habilidades em <strong>React</strong>, <strong>Sass</strong> e <strong>React Router Dom</strong>.
        </p>
        <p>
          Desenvolvido com carinho durante meus estudos! 🚀
        </p>
      </div>
    </section>
  );
};

export default Sobre;