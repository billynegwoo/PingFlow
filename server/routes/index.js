const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.io.emit("socketToMe", {
      user: "blah"
    });
    res.json({
        user: "blah"
    })
});

module.exports = router;