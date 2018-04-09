const express = require('express');
const router = express.Router();

router.get('/search', function(req, res) {
    res.render('../views/index');
});

router.get('/search/results', function(req, res) {
    let testTerm = req.query.search_query;
    res.render('../views/results', {
        testTerm: testTerm,
        testENV: process.env.TEST_VAR
    });
})

module.exports = router;