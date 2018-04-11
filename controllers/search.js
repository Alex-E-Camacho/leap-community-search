const express = require('express');
const router = express.Router();
let bing = require('../helpers/bingSearch.js');
const stackoverflow_search = require('../helpers/stackoverflowSearch.js');

router.get('/search', function(req, res) {
    res.render('../views/index');
});

router.get('/search/results', async function(req, res) {
    let searchResults = bing.bing_web_search(req.query.search_query);
    let test = await searchResults.then(function(results) {
        return results;
    });
    let so_search = stackoverflow_search.stackoverflow_search(req.query.search_query)
    let soSearchResults = await so_search.then(function(results) {
        return results;
    })
    res.render('../views/results', {
        test : test,
        soSearchResults : soSearchResults
    });
})

module.exports = router;