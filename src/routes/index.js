const express = require('express');
const router = express.Router();

const city = require('./city'); 
 
router.get('/', (err, res) => {
    res.render('');
});

router.use('/city', city);

module.exports = router;
