const express = require('express');
const router = express.Router();

const petController = require('../controllers/pet');

// create new pet
router.post('/', petController.createNewpet);

// get all pets
router.get('/', petController.getPetsList);

// get pet by ID
router.get('/:id',petController.getpetByID);

// get all pets by owner
router.get('/:owner_id', petController.getPetsListByOwner);

// get all pets by type
router.get('/:type', petController.getPetsListByOwner);

// update pet
router.put('/:id', petController.updatePet);

// delete pet
router.delete('/:id',petController.deletePet);

module.exports = router;