const axios = require("axios");

const fact = {
  async getFact() {
    return new Promise(async (resolve, reject) => {
      await axios
        .get(`https://animu.ml/fact`)
        .then(function (response) {
          resolve(response.data.fact);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  },
};
module.exports = fact;
