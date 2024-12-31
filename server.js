// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Endpoint para pesquisa no cache
app.post('/cached-search', async (req, res) => {
  const {
    origin_airport,
    destination_airport,
    cabin,
    start_date,
    end_date,
    take,
    order_by
  } = req.body;

  // Validar campos obrigatórios
  if (!origin_airport || !destination_airport) {
    return res.status(400).json({ error: 'Campos obrigatórios: origin_airport, destination_airport' });
  }

  const options = {
    method: 'GET',
    url: `https://seats.aero/partnerapi/search?origin_airport=${origin_airport}&destination_airport=${destination_airport}&cabin=${encodeURIComponent(cabin || '[economy, premium, business, first]')}&start_date=${start_date}&end_date=${end_date}&take=${take || 10}&order_by=${order_by || 'lowest_mileage'}`,
    headers: {
      accept: 'application/json',
      'Partner-Authorization': process.env.SEATS_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados do cache:', error);
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
