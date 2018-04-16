const express = require('express');
const router = express.Router();
const bingWebSearch = require('../helpers/bingSearch.js');
const stackoverflowSearch = require('../helpers/stackoverflowSearch.js');
const axios = require('axios');


router.get('/search', function(req, res) {
    res.render('../views/index');
});

// router.get('/search/results', async function(req, res) {
//     let bingWebSearchResults = bingWebSearch.bingWebSearch(req.query.search_query);
//     let test = await bingWebSearchResults.then(function(results) {
//         return results;
//     });
//     let soSearch = stackoverflowSearch.stackoverflowSearch(req.query.search_query)
//     let soSearchResults = await soSearch.then(function(results) {
//         return results;
//     })
//     res.render('../views/results', {
//         test : test,
//         soSearchResults : soSearchResults
//     });
// })

router.get('/search/results', function(req, res) {
  axios.all([
    bingWebSearch.bingWebSearch(req.query.search_query),
    stackoverflowSearch.stackoverflowSearch(req.query.search_query)
  ])
  .then(axios.spread(function (bing, stackoverflow) {
    res.render('../views/results', {
      bing: bing,
      stackoverflow: stackoverflow
    })
  }))
})
module.exports = router;
