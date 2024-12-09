const { getUserActivityById } = require('../../models/models');

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
  }
  
    const { id } = req.query; 
    const userData = getUserActivityById(Number(id));

    if (!userData) {
        res.status(404).json({ error: 'Activité utilisateur non trouvée' });
        return;
    }

    res.status(200).json(userData);
}