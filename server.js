// server.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// API Key for seats.aero
const API_KEY = process.env.SEATS_API_KEY;

if (!API_KEY) {
    console.error('API key is missing. Please set SEATS_API_KEY in your .env file.');
    process.exit(1);
}

// Throttling mechanism
let isRequestAllowed = true;

// Endpoint para enviar os dados ao seats.aero
app.post('/search', async (req, res) => {
    if (!isRequestAllowed) {
        return res.status(429).json({ error: 'Aguarde 15 segundos antes de fazer outra requisição.' });
    }

    const { origem_aeroporto, destino_aeroporto, data_de_partida, fonte, desabilitar_filtros } = req.body;

    // Validar os campos obrigatórios
    if (!origem_aeroporto || !destino_aeroporto || !data_de_partida || !fonte) {
        return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // Permitir apenas fontes válidas
    const validSources = ['united', 'delta', 'virginatlantic', 'velocity', 'aeroplan', 'alaska'];
    if (!validSources.includes(fonte)) {
        return res.status(400).json({ error: 'A fonte deve ser uma das seguintes: ' + validSources.join(', ') });
    }

    // Configurar o cabeçalho e os dados da requisição
    const headers = {
        'Partner-Authorization': API_KEY,
    };

    const data = {
        origin_airport: origem_aeroporto,
        destination_airport: destino_aeroporto,
        departure_date: data_de_partida,
        source: fonte,
        disable_filters: desabilitar_filtros || false,
    };

    try {
        // Bloquear novas requisições até que esta seja concluída
        isRequestAllowed = false;

        const response = await axios.post('https://seats.aero/partnerapi/live', data, { headers });

        // Liberar após a resposta da API
        setTimeout(() => {
            isRequestAllowed = true;
        }, 15000);

        // Retornar o resultado da API
        return res.json(response.data);
    } catch (error) {
        // Liberar após o erro
        setTimeout(() => {
            isRequestAllowed = true;
        }, 15000);

        // Tratar erros da API
        const status = error.response ? error.response.status : 500;
        const message = error.response ? error.response.data : 'Erro desconhecido';
        return res.status(status).json({ error: message });
    }
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
