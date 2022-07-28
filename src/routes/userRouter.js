//-----Require------//
const express = require('express');
const router= express.Router();


const userController = require ('../controllers/userController.js')
const upload = require('../middleware/middlemulter')


console.log('estoy en el userRouter');

router.get('/login', userController.login);

router.get('/register', userController.register);
// array() para subir muchos archivos
router.post('/', upload.array('image'), userController.store);

module.exports = router;