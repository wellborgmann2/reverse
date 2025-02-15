const fetch = require('node-fetch'); // Importando fetch para fazer requisições internas

module.exports = async (req, res) => {
  try {
    // Realiza uma requisição para outra rota interna do projeto
    const url = req.query;
    const response = await fetch(url);
    const data = await response.json();

    // Manipula a resposta e envia para o cliente
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao acessar a rota interna', error: error.message });
  }
};
