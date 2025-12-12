// src/components/Main.jsx
import React from 'react';
import s from './Main.module.scss'

// Recebemos "children" como argumento da função
const Main = ({ children }) => {
  return (
    <main className={s['main-container']}>
      {/* Aqui dizemos: "React, desenhe o recheio aqui dentro" */}
      {children}
    </main>
  );
};

export default Main;