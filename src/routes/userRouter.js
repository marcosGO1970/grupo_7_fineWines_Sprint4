const express = require('express');

const userController = require ('../controllers/userController.js')

const router= express.Router();
console.log('estoy en el router');

router.get('/login', userController.login);

router.get('/register', userController.register);

module.exports = router;