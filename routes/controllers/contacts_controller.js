// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getAllContacts = (req, res) => {
    res.status(200).json('Get all contacts');
};

// @desc Get the contact with id
// @route GET /api/contacts/:id
// @access public
const getAContact = (req, res) => {
    res.status(200).json(`Get the contact ${req.params.id}`);
};

// @desc Create a contacts
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
    res.status(201).json(`Create a contact`);
};

// @desc Update a contact
// @route PATCH /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json(`Update the contact ${req.params.id}`);
};

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json(`Get the contact ${req.params.id}`);
};


module.exports = {
    getAllContacts,
    getAContact,
    createContact,
    updateContact,
    deleteContact,
};

