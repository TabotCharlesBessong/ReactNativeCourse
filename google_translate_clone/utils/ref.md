const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('q', 'English is hard, but detectably so');

const options = {
method: 'POST',
url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
headers: {
'content-type': 'application/x-www-form-urlencoded',
'Accept-Encoding': 'application/gzip',
'X-RapidAPI-Key': 'aa90f9069dmsh77129c141cac057p10e255jsn3b7b6110ee58',
'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
},
data: encodedParams,
};

try {
const response = await axios.request(options);
console.log(response.data);
} catch (error) {
console.error(error);
}

---

// const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
      params: {
        text: 'Hello, world!!',
        to: 'es',
        from: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'aa90f9069dmsh77129c141cac057p10e255jsn3b7b6110ee58',
        'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.error(error)
    })
