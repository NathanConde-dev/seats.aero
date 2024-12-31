require('dotenv').config();
const express = require('express');
const seatsaero = require('@seatsaero/v1.0#cr81llxus6yfu');

const app = express();
app.use(express.json());

// Configure a autenticação
seatsaero.auth(process.env.SEATS_API_KEY);

// Endpoint para pesquisa no cache
app.post('/cached-search', async (req, res) => {
  const {
    origin_airport,
    destination_airport,
    cabin,
    start_date,
    end_date,
    cursor,
    take,
    order_by,
    skip,
  } = req.body;

  // Validar campos obrigatórios
  if (!origin_airport || !destination_airport) {
    return res.status(400).json({ error: 'Campos obrigatórios: origin_airport, destination_airport' });
  }

  try {
    const { data } = await seatsaero.cachedSearch({
      origin_airport,
      destination_airport,
      cabin,
      start_date,
      end_date,
      cursor,
      take: take || 500,
      order_by: order_by || 'departure_date',
      skip: skip || 0,
    });

    return res.json(data);
  } catch (err) {
    console.error('Erro ao buscar dados do cache:', err);
    const status = err.response ? err.response.status : 500;
    const message = err.response ? err.response.data : 'Erro desconhecido';
    return res.status(status).json({ error: message });
  }
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
