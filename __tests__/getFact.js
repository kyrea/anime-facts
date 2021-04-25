const AnimeFact = require("../index");
const api = new AnimeFact("YOUR TOKEN");

api.getFact().then((res) => console.log(res));
// if successful: { body }

// if failed, it will throw an error
