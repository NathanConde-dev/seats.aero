// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Helper para formatar a mensagem
const formatMessage = (data) => {
  return data.reduce((message, item) => {
    const economy = item.Cabin.Economy;
    const business = item.Cabin.Business;

    message += `${item.OriginAirport} 🛫 ${item.DestinationAirport} | `;
    message += `Cia: ${economy.Airlines || business.Airlines} | `;
    message += `Data: ${item.Date} | `;
    if (economy.MileageCost) {
      message += `⭕️${economy.MileageCost} MILHAS ${item.Source.toUpperCase()} | `;
    }
    if (business.MileageCost) {
      message += `⭕️${business.MileageCost} MILHAS ${item.Source.toUpperCase()} (BUSINESS) | `;
    }

    return message;
  }, '').slice(0, -3); // Remove o último separador " | "
};

// Helper para filtrar dados
const filterResponse = (data) => {
  return data.map(item => ({
    OriginAirport: item.Route.OriginAirport,
    DestinationAirport: item.Route.DestinationAirport,
    Date: item.Date,
    Cabin: {
      Economy: {
        MileageCost: item.YMileageCostRaw,
        Taxes: item.YTotalTaxesRaw,
        Airlines: item.YAirlines
      },
      Business: {
        MileageCost: item.JMileageCostRaw,
        Taxes: item.JTotalTaxesRaw,
        Airlines: item.JAirlines
      }
    },
    Source: item.Source
  }));
};

// Endpoint para pesquisa no cache
app.post('/cached-search', async (req, res) => {
  const {
    name,
    number,
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
    const filteredData = filterResponse(response.data.data);
    const textMessage = formatMessage(filteredData);
    return res.json({
      name,
      number,
      textMessage
    });
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
