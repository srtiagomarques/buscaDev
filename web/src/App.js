import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Import do arquivo que apresenta as informações do meu usuário cadastrado
import DevItem from './components/DevItem';
// Import do arquivo de formulário
import DevForm from './components/DevForm';

// Três conceitos principais do React
// Componente   = Função que retorna um HTML, CSS ou algum conteúdo de Javascript.
// Propriedade  = Informações que o um componente PAI passa para o componente FILHO.
// Estado       = Informações mantidas pelo componente (Lembrar: Imutabilidade)

function App() {

  // useState
  const [devs, setDevs] = useState([]);

  // (estado) useEffect - Serve para disparar uma função toda vez que uma informação é alterada, ou uma vez ma remerização do componente
  // Parâmetros - {Qual função precisa ser executada} - [quando essa função é executada]
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);
  // função disparada quando o usuário clicar no submit da página
  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    // Incluí o último usuário cadastrado no array de devs
    setDevs([...devs, response.data]);
    // Se fosse uma remoção
    // setDevs([...devs.response.filter]):
  }

  return (
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {/* Percorrer o array dos devs e retorná-los */}
          {devs.map(dev => (
            // Quando utilizamos o map o primeiro item precisa ter a prorpiedad key
            // Aponta para o arquivo que apresenta as informações do meu usuário cadastrado
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
