import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {

    // useState
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    // (estado) useEffect - Serve para disparar uma função toda vez que uma informação é alterada, ou uma vez ma remerização do componente
    useEffect(() => {
        // Obter a latidute e longitude do navegador
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (error) => {
                console.log(error);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleSubmit(e) {
        // Previne o comportamento padrão do navegador
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });
        // Limpa campos pós o cadastro
        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username"> Usuário do Github </label>
                <input name="github_username" id="github_username" required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)} />
            </div>
            <div className="input-block">
                <label htmlFor="techs"> Tecnologias </label>
                <input name="techs" id="techs" required
                    value={techs}
                    onChange={e => setTechs(e.target.value)} />
            </div>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude"> Latitude </label>
                    <input type="number" name="latitude" id="latitude" required value={latitude}
                        // Armazenar o valor de um input dentro do valor de um estado
                        onChange={e => setLatitude(e.target.value)} />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude"> Longitude </label>
                    <input type="number" name="longitude" id="longitude" required value={longitude}
                        onChange={e => setLongitude(e.target.value)} />
                </div>
            </div>
            <button type="submit"> Salvar </button>
        </form>
    );
}

export default DevForm;