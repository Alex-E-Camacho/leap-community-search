let axios = require('axios');

let bing_web_search = function(search) {
    let searchEncoded = encodeURIComponent(search);
    axios.get(
        'https://api.cognitive.microsoft.com/bing/v7.0/search?q=' + searchEncoded + '+site:https://docs.microsoft.com/en-us/azure/&mkt=en-us', {
            headers: { 'Ocp-Apim-Subscription-Key' : process.env.BING_SUBSCRIPTION_KEY }
        })
    .then(function(response) {
        let res = response.data;
        console.log(res)
    })
    .catch(function(error) {
        console.log(error)
    })
}

module.exports = {
    bing_web_search : bing_web_search
}