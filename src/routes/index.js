const express = require('express');
const router = express.Router();

const city = require('./city'); 
const nations = require('./nations');
 
router.get('/', (err, res) => {
    res.render('');
});

router.use('/city', city);
router.use('/nations', nations);

module.exports = router;
