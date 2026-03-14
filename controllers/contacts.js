const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
        const db = req.app.locals.db;        
        const contacts = await db.collection('Contacts').find().toArray();        
        res.status(200).json(contacts);
};

const getSingle = async (req, res) => {

        const userId = new ObjectId(req.params.id);        
        const db = req.app.locals.db;
        const contact = await db.collection('Contacts').findOne({ _id: userId });
        res.status(200).json(contact);
};

const createContact = async (req, res) => {
        
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };

        const db = req.app.locals.db;

        const response = await db.collection('Contacts').insertOne(contact);

        if (response.acknowledged) {
        
            const createdContact = {
                _id: response.insertedId,
                ...contact
            };
            
            res.status(200).json({
                message: "Contact successfully created",
                contact: createdContact
            });
        }
    };

const updateContact = async (req, res) => {

        const userId = new ObjectId(req.params.id);
        
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };

        const db = req.app.locals.db;

        const response = await db.collection('Contacts').replaceOne({ _id: userId }, contact);

        if (response.modifiedCount > 0) {

            const updatedContact = {
                _id: userId,
                ...contact
            };
            
            res.status(200).json({
                message: "Contact successfully updated",
                contact: updatedContact
            });
        }
};

const deleteContact = async (req, res) => {

        const userId = new ObjectId(req.params.id);

        const db = req.app.locals.db;

        const response = await db.collection('Contacts').findOneAndDelete({ _id: userId });

        const deletedContact = response && response.value ? response.value : response;
        
        if (deletedContact) {

            res.status(200).json({
                message: "Contact successfully deleted",
                contact: deletedContact
            });
        }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};