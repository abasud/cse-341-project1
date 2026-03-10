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

module.exports = {
    getAll,
    getSingle
};