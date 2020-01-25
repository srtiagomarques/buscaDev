import React from 'react';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Três conceitos principais do React
// Componente   = Função que retorna um HTML, CSS ou algum conteúdo de Javascript.
// Propriedade  = Informações que o um componente PAI passa para o componente FILHO.
// Estado       = Informações mantidas pelo componente (Lembrar: Imutabilidade)

function App() {

  return (
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username"> Usuário do Github </label>
            <input name="github_username" id="github_username" required />
          </div>
          <div class="input-block">
            <label htmlFor="techs"> Tecnologias </label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude"> Latitude </label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude"> Longitude </label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit"> Salvar </button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandesb "></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsulum</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandesb "></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsulum</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandesb "></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsulum</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandesb "></img>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Lorem ipsulum</p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
