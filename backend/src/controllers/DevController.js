const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// index: mostrar uma lista, show: mostrar único, store: criar, update: alterar, destroy: excluir.

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            // console.log(apiResponse.data);
            // Se o name não existir ele pega o campo login
            const { name = login, avatar_url, bio } = apiResponse.data;
            // console.log(name, avatar_url, bio);
            // split = separo onde existe cada vírgula se torna um item do array
            // map = percorro o meu array, ai pra cada uma das informações eu removos os espaços antes e depois com trim
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
            //Filtrar as conexões que estão há no máximo 10km de distândia
            // E que o dev tenha ao menos uma das tecnologias filtradas
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            )
            console.log(sendSocketMessageTo);
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
        return response.json(dev);
    },

    async update() {

    },

    async destroy() {

    },

};