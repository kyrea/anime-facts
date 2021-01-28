<h3 align="center"><strong>Generate random anime facts with a huge database.</strong></h3>

## Support Server
[Click here](https://discord.gg/UJgGFmd)

## Installation
```bash
$ npm install anime-facts
```

## Usage
```javascript
const randomfact = require('anime-facts');
const fact = randomfact.facts();

console.log(fact);
```

## Discord Bot
```javascript
const randomfact = require('anime-facts')
const Discord = require("discord.js");
const client = new Discord.Client();

client.login("BOT_TOKEN");

client.on("message", async message => {
  //Plain Text
  if (message.content === "plain") {
    const fact = randomfact.facts();
    message.channel.send(fact);
  }
  //Embed Image (D.JS Version 11)
  if (message.content === "embed") {
    const fact = randomfact.facts();
    const embed = new Discord.RichEmbed().setDescription(fact);
    message.channel.send(embed);
  }
  //Embed Image (D.JS Version 12)
  if (message.content === "embed") {
    const fact = randomfact.facts();
    const embed = new Discord.MessageEmbed().setDescription(fact);
    message.channel.send(embed);
  }
});
```

## Options
**Options** | **Description** | **Usage**
:---: | --- | ---
facts | Random anime facts. | `randomfact.facts()`


## License
[GPLv3.0](https://github.com/notkyoyo/anime-facts/blob/master/LICENSE) © Kyoyo
