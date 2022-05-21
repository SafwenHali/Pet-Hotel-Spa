const express = require('express');
const router = express.Router();

const petTypeController = require('../controllers/type_pet');

// create new petType
router.post('/', petTypeController.createNewPetType);

// get all petTypes
router.get('/', petTypeController.getPetTypesList);

// get petType by ID
router.get('/:id',petTypeController.getPetTypeByID);

// update petType
router.put('/:id', petTypeController.updatePetType);

// delete petType
router.delete('/:id',petTypeController.deletePetType);

module.exports = router;