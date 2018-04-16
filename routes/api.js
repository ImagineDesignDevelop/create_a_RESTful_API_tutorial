const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');


// GET /contacts
router.get('/contacts', (req, res, next) => {
   Contact.find({}).then((contacts) => {
       res.status(200).send({contacts : contacts});
   }).catch(next);
});

// POST /contact
router.post('/contact', (req, res, next) => {
    Contact.create(req.body).then((contact) => {
        res.status(200).send({contact : contact, created : true});
    }).catch(next);
});

// PUT /contact/_id
router.put('/contact/:_id', (req, res, next) => {
    Contact.findOneAndUpdate({_id : req.params._id}, req.body).then(() => {
        Contact.find({_id : req.params._id}).then((contact) => {
            res.status(200).send(contact);
        })
    }).catch(next);
});

// DELETE /contact/_id
router.delete('/contact/:_id', (req, res, next) => {
    Contact.findOneAndRemove({_id : req.params._id}).then((contact) => {
        res.status(200).send({contact : contact, deleted : true})
    }).catch(next);
});

module.exports = router;