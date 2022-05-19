const express = require('express');
const {addClient,
    getAllClients
      } = require('../controllers/clientController');

const router = express.Router();

router.post('/client', addClient);
router.get('/allclients',getAllClients);


module.exports = {
    routes: router
}