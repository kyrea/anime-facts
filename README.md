<h3 align="center"><strong>Generate random anime facts with a huge database.</strong></h3>
<center><strong>Powered by <a href="https://animu.ml" target="_blank">Animu</a></strong></center>

<br>

Need support? _[Click here](https://discord.gg/yyW389c)_

## Installation

```bash
$ npm install anime-facts
```

## Usage

```javascript
const random = require("anime-facts");
const fact = random.getFacts(); // Returns id, fact, tags

console.log(fact);
```

## Discord Bot

```javascript
const random = require("anime-facts");
const Discord = require("discord.js");
const client = new Discord.Client();

client.login("BOT_TOKEN");

client.on("message", async (message) => {
  //Plain Text
  if (message.content === "plain") {
    const fact = random.getfact();
    message.channel.send(fact);
  }
  //Embed Image (D.JS Version 11)
  if (message.content === "embed") {
    const fact = random.getfact();
    const embed = new Discord.RichEmbed().setDescription(fact);
    message.channel.send(embed);
  }
  //Embed Image (D.JS Version 12)
  if (message.content === "embed") {
    const fact = random.getfact();
    const embed = new Discord.MessageEmbed().setDescription(fact);
    message.channel.send(embed);
  }
});
```

## Functions

| **Functions** | **Description**              | **Usage**          |
| :-----------: | ---------------------------- | ------------------ |
|    getFact    | Generate random anime facts. | `random.getFact()` |

## Credits

[@LamkasDev](https://github.com/LamkasDev) for adding facts to prior database.\
[@xMercyTheDeveloper](https://github.com/xMercyTheDeveloper) for adding a fact to prior database.
