const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// create new user
router.post('/', userController.createNewUser);

module.exports = router;