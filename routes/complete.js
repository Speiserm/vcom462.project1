var express = require('express');
var router = express.Router();

/* GET wnumber page. */
router.get('/', function (req, res) {
    res.render('complete', { title: 'Courtyard Kiosk',
                              prompt: 'Thank you for checking in your guests!'});
});

module.exports = router;
