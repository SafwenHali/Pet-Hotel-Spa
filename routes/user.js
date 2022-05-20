const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// create new user
router.post('/', userController.createNewUser);

// get all users
router.get('/', userController.getUsersList);

// get user by ID
router.get('/:id',userController.getUserByID);

// update user
router.put('/:id', userController.updateUser);

// delete user
router.delete('/:id',userController.deleteUser);

module.exports = router;