var express = require('express');
var router = express.Router();

/* GET wnumber page. */
router.get('/', function (req, res) {
    res.render('numberovernight', { title: 'Courtyard Kiosk' });
});

module.exports = router;
