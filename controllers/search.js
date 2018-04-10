const express = require('express');
const router = express.Router();
let bing = require('../helpers/bingSearch.js');

router.get('/search', function(req, res) {
    res.render('../views/index');
});

router.get('/search/results', function(req, res) {
    let searchResults = bing.bing_web_search(req.query.search_query);
    let test = searchResults.then(function(results) {
         return results;
    });
    res.render('../views/results', {
        test : test
    });
})

module.exports = router;