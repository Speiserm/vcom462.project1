var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Courtyard kiosk',
                          prompt:'Please check in your guests'});
});

module.exports = router;
