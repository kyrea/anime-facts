<h3 align="center"><strong>Generate random anime facts with a huge database.</strong></h3>
<center><strong>Powered by <a href="https://animu.ml" target="_blank">Animu</a></strong></center>
<br>

Need support? _[Click here](https://discord.gg/yyW389c)_

## Installation:

### NPM

```bash
$ npm install anime-facts
```

### YARN

```bash
$ yarn add anime-facts
```

### Query parameters _[ OPTIONAL ]_

| Parameters     | Type     | Description                                                                                                                                                                                                                                                                                                         |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| tags      | `String` | Filter random fact by tag(s). Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`). A comma separated list will match facts that have **_all_** of the given tags. While a pipe (`\|`) separated list will match facts that have **_either_** of the provided tags.|                                                                                                          |
| minLength | `Int`    | The minimum Length in characters ( can be combined with `maxLength` )               |                                          |
| maxLength | `Int`    | The maximum Length in characters ( can be combined with `minLength` )   |                                                                                                                                                                                        

## Usage:


```javascript
const { getFact } = require("anime-facts");
getFact().then((fact) => console.log(fact));
```
### Using Query:
```javascript
const { getFact } = require("anime-facts");
// Note currently there are only fews tags, length available in the database. So, it might return the same data multiple times.
getFact(null, 1, 100).then((fact) => console.log(fact)); 

// Returns with:
{
  id: 5,
  tags: [ 'TEZUKA Osamu', 'Artist' ],
  fact: 'TEZUKA Osamu is the most famous manga artist in Japan.',
  length: 54
}
```

## Functions
| **Functions** | **Description**              | **Usage**          |
| :-----------: | ---------------------------- | ------------------ |
|    getFact    | Generate random anime facts. | `random.getFact()` |

## Credits
[@LamkasDev](https://github.com/LamkasDev) for adding facts to prior database. _PR [#1](https://github.com/notkyoyo/anime-facts/pull/1)_\
[@xMercyTheDeveloper](https://github.com/xMercyTheDeveloper) for adding a fact to prior database. _PR [#2](https://github.com/notkyoyo/anime-facts/pull/2)_\
[@Lioness100](https://github.com/Lioness100) for adding types and improving codes in version [2.2.6](https://www.npmjs.com/package/anime-facts/v/2.2.6). _PR [#3](https://github.com/notkyoyo/anime-facts/pull/3) and [#4](https://github.com/notkyoyo/anime-facts/pull/4)_
