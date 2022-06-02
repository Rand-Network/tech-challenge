const express = require('express');
const User = require('../models/user')
const router = express.Router();

// Last KYC from a specific user
router.get('/user/:id', async() => {
    try {
        const user = User.findOne({_id: req.params.id})
    
        if (user.kyc) {
            res.send(user.kyc)
        } else {
            res.status(404).send({ message: 'User not found'})
        }
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
});

// Transactions (more recent first) and balance of an specific user
router.get('/user/transactionsBalance/:id', (req, res) => {

});

// Create new user with mail and full name
router.post('/user', async(req, res) => {
    const user = new User(req.body)

    try {
        await user.save();
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
});

module.exports = router;