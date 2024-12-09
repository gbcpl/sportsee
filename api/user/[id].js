const { getUserById } = require('../models/models');

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
  }
    const { id } = req.query;
    const userData = getUserById(Number(id));

    if (!userData) {
        res.status(404).json({ error: 'Utilisateur non trouvé' });
        return;
    }

    res.status(200).json(userData);
}