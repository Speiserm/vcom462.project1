var express = require('express');
var router = express.Router();

/* GET wnumber page. */
router.get('/', function (req, res) {
    res.render('guestinfo', { title: 'Courtyard Kiosk',
                              prompt: 'Please enter your guests information: '});
});

module.exports = router;
