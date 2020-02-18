var express = require('express');
var router = express.Router();

/* GET wnumber page. */
router.get('/', function (req, res) {
    res.render('wnumber', { title: 'Courtyard Kiosk',
                            prompt: 'Please enter your W#: '});
});

module.exports = router;
