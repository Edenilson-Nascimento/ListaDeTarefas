// src/pages/Home.jsx
import { useState } from 'react'; // 1. Importante!
import S from './Home.module.scss'

const Home = () => {
    // Estado para guardar o texto do input
    const [novaTarefa, setNovaTarefa] = useState("");
    
    // Estado para guardar a lista (começa vazia)
    const [lista, setLista] = useState([]);

    // Função que adiciona a tarefa
    const adicionarTarefa = (e) => {
        e.preventDefault(); // Evita que a página recarregue ao enviar o form
        
        if (novaTarefa === "") return; // Não adiciona se estiver vazio

        // Cria um objeto para a tarefa com um ID único (usamos Date.now para simplificar)
        const objetoTarefa = {
            id: Date.now(),
            texto: novaTarefa,
            finalizado: false
        };

        // Adiciona na lista: pega tudo que já tinha (...lista) e põe o novo
        setLista([...lista, objetoTarefa]);
        
        // Limpa o input
        setNovaTarefa(""); 
    };

    // Função para remover tarefa (recebe o ID de quem vai ser deletado)
    const removerTarefa = (id) => {
        // Filtra a lista mantendo apenas quem tem o ID DIFERENTE do que clicamos
        const novaLista = lista.filter(item => item.id !== id);
        setLista(novaLista);
    };

    return (
        <section className={S['todo-container']}>
             <h1>Minha Lista de Tarefas</h1>

             {/* Formulário para adicionar */}
             <form onSubmit={adicionarTarefa}>
                 <input 
                    type="text" 
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Digite uma tarefa..."
                 />
                 <button type="submit">Adicionar</button>
             </form>

             {/* A Lista Visual */}
             <ul>
                 {lista.map((item) => (
                    <li key={item.id}>
                        {item.texto}
                        
                        {/* Botão de excluir chama a função passando o ID */}
                        <button onClick={() => removerTarefa(item.id)}>
                            Excluir
                        </button>
                    </li>
                 ))}
             </ul>
        </section>
    );
};

export default Home;