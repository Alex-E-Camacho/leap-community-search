const express = require('express');
const app = express();
const router = express.Router();

router.get('/search', function(req, res) {
    res.send('SUCCESSFULL REROUTE!!');
    // res.render('../views/index');
})

module.exports = router;