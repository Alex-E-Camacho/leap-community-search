const express = require('express');
const router = express.Router();
let bing = require('../helpers/bingSearch.js');

router.get('/search', function(req, res) {
    res.render('../views/index');
});

router.get('/search/results', function(req, res) {
    let testTerm = bing.bing_web_search(req.query.search_query);
    res.render('../views/results', {
        testTerm: testTerm
    });
})

module.exports = router;