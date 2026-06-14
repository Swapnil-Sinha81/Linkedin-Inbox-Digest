const router = require('express').Router();
const { signup, getBill } = require('../controller/appController');

/* http request */
router.post('/user/signup',signup);
router.post('/product/getBill',getBill);

module.exports = router;