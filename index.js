const EventEmitter = require("events");
const fetch = require("phin");

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
   * @param {string[]} [tags] - the array of tags
   * @param {number} [minLength] - the minLength for query
   * @param {number} [maxLength] - the maxLength for query
   * @returns {Promise<Fact>}
   */

  async getFact(tags, minLength, maxLength) {
    const auth = this._auth;
    if (!auth)
      throw new TypeError("Missing authorization token");
    const params = {};
    if (tags == undefined) {
      params.tags = "";
    } else {
      params.tags = tags;
    }
    if (minLength == undefined) {
      params.minLength = "";
    } else {
      params.minLength = minLength;
    }
    if (maxLength == undefined) {
      params.maxLength = "";
    } else {
      params.maxLength = maxLength;
    }
    return fetch({
             url : `https://animu.ml/fact?tags=${params.tags}&minLength=${
                 params.minLength}&maxLength=${params.maxLength}`,
             headers : {
               Auth : auth,
               "Content-Type" : "application/json",
             },
             parse : "json",
           })
        .then((res) => {
          if (res.statusCode !== 200)
            switch (res.statusCode) {
            case 404:
              return {
                statusCode : res.statusCode,
                body : res.body,
                error : "Could not find any fact",
              };
              break;
            case 502:
              return {
                statusCode : res.statusCode,
                body : res.body,
                error : "Server down",
              };
              break;
            default:
              return {
                statusCode : res.statusCode,
                body : res.body,
                error : "Unknown error",
              };
            }
          return {
            id : res.body._id,
            tags : res.body.tags || [],
            fact : res.body.fact,
            length : res.body.length,
          };
        })
        .catch((err) => { throw err; });
  }
}

module.exports = AnimeFact;

/**
 * @typedef {object} Fact
 * @prop {number} id
 * @prop {string[]} tags
 * @prop {string} fact
 * @prop {number} length
 */
