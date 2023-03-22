const User = require('../models/user.model.js');

const listUsers =  (req, res) => {
    res.status(200).send('Users OK');
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
    }catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'ERROR creating User',
            err : err
        })
    }
} 

module.exports = {
    listUsers,
    createUser
}