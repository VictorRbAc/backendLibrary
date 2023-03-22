const router = require('express').Router();
const {listUsers,createUser} = require('../controllers/user.controller.js');

router.get('/',listUsers);

router.post('/', createUser)

module.exports = router;