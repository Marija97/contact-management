const asyncHandler = require('express-async-handler');

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).json('Get all contacts');
});

// @desc Get the contact with id
// @route GET /api/contacts/:id
// @access public
const getAContact = asyncHandler(async (req, res) => {
    res.status(200).json(`Get the contact ${req.params.id}`);
});

// @desc Create a contacts
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    res.status(201).json(`Create a contact`);
});

// @desc Update a contact
// @route PATCH /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json(`Update the contact ${req.params.id}`);
});

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json(`Get the contact ${req.params.id}`);
});


module.exports = {
    getAllContacts,
    getAContact,
    createContact,
    updateContact,
    deleteContact,
};

