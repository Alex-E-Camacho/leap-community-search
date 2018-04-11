const axios = require('axios');

let stackoverflow_search = function(search) {
    let searchEncoded = encodeURIComponent(search);

    return axios.get('http://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=' + searchEncoded + '&site=stackoverflow')
    .then(function(response) {
        return response.data.items;
    })
    .catch(function(error) {
        console.log(error);
    })
}

module.exports = {
    stackoverflow_search: stackoverflow_search
}