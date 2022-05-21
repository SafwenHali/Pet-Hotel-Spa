const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/service');

// create new service
router.post('/', serviceController.createNewservice);

// get all services
router.get('/', serviceController.getservicesList);

// get service by ID
router.get('/:id',serviceController.getserviceByID);

// get service by petType
router.get('/:pet_type',serviceController.getservicesByPetType);

// update service
router.put('/:id', serviceController.updateService);

// delete service
router.delete('/:id',serviceController.deleteService);

module.exports = router;