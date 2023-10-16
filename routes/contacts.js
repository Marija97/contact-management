const express = require('express');
const router = express.Router();

const { getAllContacts,
    getAContact,
    createContact,
    updateContact,
    deleteContact,
} = require('./controllers/contacts_controller');


// GET api/contacts/
router.route('/').get(getAllContacts);

// GET api/contacts/:id
router.route('/:id').get(getAContact);

// POST api/contacts/
router.route('/').post(createContact);

// PATCH api/contacts/:id
router.route('/:id').patch(updateContact);

// DELETE api/contacts/:id
router.route('/:id').delete(deleteContact);


module.exports = router;