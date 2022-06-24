const EventEmitter = require("events");
const fetch = require("phin");
const { api } = require("./package.json");

class AnimeFact extends EventEmitter {
  /**
   * The main class
   * @param {token} [auth] - the authorization token
   */
  constructor(token) {
    super();

    this._auth = token;
  }

  /**
   * Gets a fact from the api
   * @returns {Promise<Fact>}
   */

  async getFact() {
    const auth = this._auth;
    if (!auth) throw new TypeError("Missing authorization token");
    return fetch({
      url: `${api}/fact`,
      headers: {
        Auth: auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    })
      .then((res) => {
        if (res.statusCode !== 200)
          switch (res.statusCode) {
            case 404:
              return {
                statusCode: res.statusCode,
                body: res.body,
                error: "Could not find any fact",
              };
            case 502:
              return {
                statusCode: res.statusCode,
                body: res.body,
                error: "Server down",
              };
            default:
              return {
                statusCode: res.statusCode,
                body: res.body,
                error: "Unknown error",
              };
          }
        return {
          id: res.body._id,
          fact: res.body.fact,
        };
      })
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = AnimeFact;

/**
 * @typedef {object} Fact
 * @prop {number} id
 * @prop {string} fact
 */
