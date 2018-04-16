let axios = require('axios');

let bingWebSearch = function(search) {
    let searchEncoded = encodeURIComponent(search);
    
    return axios.get(
        'https://api.cognitive.microsoft.com/bing/v7.0/search?q=' + searchEncoded + '+site:https://docs.microsoft.com/en-us/azure/&mkt=en-us', {
            headers: { 'Ocp-Apim-Subscription-Key' : process.env.BING_SUBSCRIPTION_KEY }
        })
    .then(function(response) {
        return response.data.webPages;
    })
    .catch(function(error) {
        console.log(error)
    });
}

module.exports = {
    bingWebSearch : bingWebSearch
}
