const axios = require("axios");

const fact = {
  getFact() {
    return axios.get(`https://animu.ml/fact`).then((res) => res.data);
  },
};

module.exports = fact;
