import { useState } from "react";
import S from './ListaDeConvidados.module.scss'

const ListaDeConvidados = () => {
    // memoria do imput
    //inputNome: guarda o valor do input
    //setInputNome: atualiza o valor do input
    const [inputNome, setInputNome] = useState("");

    // memoria da lista
    //convidados: é o array que guarda os nomes dos convidados
    //setConvidados: atualiza o array de convidados
    const [convidados, setConvidados] = useState([]);

    const adicionar = () => {
        // se não tiver nada digitado, não faz nada
        if(inputNome === "") return;

        //A mágica do spread operator
        //criamos uma nova lista contendo: ...convidados (todos os convidados que já estavam na lista)
        // e o inputNome adiciona o novo convidado que acabamos de digitar
        const novaLista = [...convidados, inputNome];

        //atualiza a lista de convidados com a nova lista
        setConvidados(novaLista);

        //limpa o campo de input
        setInputNome("");
    };

    const remover = (posicaoParaRemover) =>{
         const listafiltrada = convidados.filter(
            (item, index) => index !== posicaoParaRemover
         )

            setConvidados(listafiltrada);
    }

    return(
        <div className={S.lista}>
            <h2>Lista de Convidados</h2>

            {/* o valor do campo de input é igual ao valor da memoria inputNome
            quando alguem digita algo no input, o onChange é disparado
            e a função setInputNome atualiza o valor da memoria inputNome
            com o novo valor digitado no input */}

            <input type="text" value={inputNome} 
            onChange={(e) => setInputNome(e.target.value)}
             />

             <p>Você está digitando: {inputNome}</p>

             <button onClick={adicionar}>Adicionar</button>

             <div>
                <ul>
                    {  // para cada nome na lista de convidados, cria um item de lista (li)
                        convidados.map((nome, index) =>(
                            <li key={index}>
                                {nome}
                                <button onClick={() => remover(index)} className={S.remover}>Remover</button>
                            </li>
                        ))
                    }
                </ul>
             </div>
        </div>
        
    );

}

export default ListaDeConvidados;