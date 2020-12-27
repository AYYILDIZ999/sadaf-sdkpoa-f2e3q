const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const ta1 = new Discord.Client();
const ta2 = new Discord.Client();
const ta3 = new Discord.Client();
const ta4 = new Discord.Client();
const ta5 = new Discord.Client();
const ta6 = new Discord.Client();
const ta7 = new Discord.Client();
const ta8 = new Discord.Client();
const ta9 = new Discord.Client();
const ta10 = new Discord.Client();
const ta11 = new Discord.Client();



 ta1.login("NzgwMDY1NDI0NTA2NjE3ODg2.X7pxag.nxacCpBV1zsgLB-bw6fguXRVObA");
 ta2.login("NzgwMDczNTg2NjU1NzU2MzIw.X7pz0g.Bb0KJUr2BYC1UugQP0geT6rvdwo");
 ta3.login("NzgwMDc1Njc0MTY4ODUyNDkw.X7p1GQ.x4_tSXXf9xhfGPXots_Yxzjx5n0");
 ta4.login("NzgwMDc3NTQyNjU2NTczNDQw.X7p4nQ.zW7jDL-LkFvRhO8lb_IHNBAkQWw");
 ta5.login("NzgwMTAwMTk5NjQ1MzE1MTU0.X7qTFw.vzF-k0Gw96oM68cEvhLAJ3tUmJE");
 ta6.login("Nzg0MTAyMTEyMDU3MDk4MjYw.X8kbkg.8K4n28eR9Rujz0L7If-KaTXbOdo");
 ta7.login("Nzg0MTE3MjExMDI2NDIzODQ4.X8kpKQ.my4AD7mt7Hv1ua0wg5pMy9Z415o");
 ta8.login("Nzg0MTIxNzE0ODA4MDYxOTkz.X8ktWg.0H9CKXADjhAsIwEcdW3-mRYI6xw");
 ta9.login("Nzg0MzU4OTY0ODI1MTYxNzU4.X8oJZQ.HkzIjhQ6tEtLxQbrtYMOI6L7-7I");
 ta10.login("Nzg0Mzg4MTYxODg2NDg2NTc4.X8oscA.UXNDcnyBSV3jQYzUGv_Fzpg7ugY");
 ta11.login("Nzg0NDE0MTI0NjgyNTEwMzU4.X8o90g.fSPk4ZEm_QDCKxtHPv0iHED8Ing");



client.on("ta", async function() {
const voiceChannel = "769617209018023946"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})

ta1.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 5 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



ta2.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 5 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta3.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 2};
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta4.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta5.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta6.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta7.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 10 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta8.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta9.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta10.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

ta11.on("message", async msg => {
  if (msg.content.toLowerCase() === "t!bekliyorum") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=-zYPp_MJ9Wg", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});


