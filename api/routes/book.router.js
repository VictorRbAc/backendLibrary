const router = require('express').Router();
const {listBooks,createBook} = require('../controllers/book.controller.js');

router.get('/', listBooks);

router.post('/', createBook)

module.exports = router;