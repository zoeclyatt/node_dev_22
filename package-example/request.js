const axios = require('axios');

axios.get('https://www.wikipedia.org')
    .then(function (response) {
        console.log(response);
    }) .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log('all done!');
    });