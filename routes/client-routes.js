const express = require('express');
const {addClient
      } = require('../controllers/clientController');

const router = express.Router();

router.post('/client', addClient);


module.exports = {
    routes: router
}