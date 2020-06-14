const databaseFact = require('../database/facts.json')


function animeFact() {
  return {
    facts: () => databaseFact[mathRandom(databaseFact.length)]
  }
}

function mathRandom(max) {
    return ~~(Math.random() * max)
}

module.exports = animeFact()
