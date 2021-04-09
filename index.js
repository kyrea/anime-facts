const axios = require("axios");

const fact = {
  getFact() {
    return axios
      .get(`https://animu.ml/fact`)
      .then((response) => response.data)
  },
};

module.exports = fact;
