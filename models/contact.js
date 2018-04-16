const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ContactSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },
    lastname : {
        type: String,
        required: [true, 'Last name is required']
    },
    phone : {
        type: String,
        required: [true, 'Phone is required']
    },
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;