const express = require('express');
const router = express.Router();
let bing = require('../helpers/bingSearch.js');

router.get('/search', function(req, res) {
    res.render('../views/index');
});

router.get('/search/results', async function(req, res) {
    let searchResults = bing.bing_web_search(req.query.search_query);
    let test = await searchResults.then(function(results) {
        return results;
        //console.log(results); <--This shows objects just fine
    });
    console.log(test); //This returns Promise { pending }
    res.render('../views/results', {
        test : test
    });
})

module.exports = router;