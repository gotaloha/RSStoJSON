const axios = require('axios'),
      to_json = require('xmljson').to_json;

var getPosts = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((response) => {
      const xml = response.data;
      to_json(xml, (error, data) => {
        if(error) {
          reject(error);
        }
        resolve(data);
      });
    })
    .catch(function (error) {
      reject(error);
    });
  });
}

module.exports = getPosts;
