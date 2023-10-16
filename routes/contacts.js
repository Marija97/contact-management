const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts_controller');


// GET api/contacts/
router.route('/').get(contactsController.getAllContacts);

// GET api/contacts/:id
router.route('/:id').get(contactsController.getAContact);

// POST api/contacts/
router.route('/').post(contactsController.createContact);

// PATCH api/contacts/:id
router.route('/:id').patch(contactsController.updateContact);

// DELETE api/contacts/:id
router.route('/:id').delete(contactsController.deleteContact);


module.exports = router;