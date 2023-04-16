<h3 align="center"><strong>Generate random anime facts with a huge database.</strong></h3>
<center><strong>Powered by <a href="https://waifu.it/" target="_blank">Waifu.it</a></strong></center>
<br>

Need support? _[Click here](https://discord.gg/yyW389c)_

### First make sure you have a [Waifu.it](https://waifu.it/) API Token. Join _[this](https://discord.gg/yyW389c)_ discord server to get one.

## Installation:

### NPM

```bash
$ npm install anime-facts
```

### YARN

```bash
$ yarn add anime-facts
```                                                                                                                                                                                

## Usage:

```javascript
const AnimeFact = require("anime-facts");
const api = new AnimeFact("YOUR TOKEN");

api.getFact().then((res) => console.log(res));

// Returns with:
{
  id: 5,
  fact: 'TEZUKA Osamu is the most famous manga artist in Japan.',
}
```


## Functions

| **Functions** | **Description**              |
| :-----------: | ---------------------------- |
|    getFact    | Generate random anime facts. |

## Credits

[@LamkasDev](https://github.com/LamkasDev) for adding facts to prior database\
[@xMercyTheDeveloper](https://github.com/xMercyTheDeveloper) for adding a fact to prior database\
[@Lioness100](https://github.com/Lioness100) for adding types and improving codes in version [2.2.6](https://www.npmjs.com/package/anime-facts/v/2.2.6)\
