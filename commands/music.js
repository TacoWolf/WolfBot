var helpers = require('./../helpers');
module.exports = {
  join: function (bot, user, userID, channelID, message) {
    bot.joinVoiceChannel('114357261417054215', function () {
    });
  },
  play: function (bot, user, userID, channelID, message, serverID) {
    bot.testAudio({
      channel: '114357261417054215',
      stereo: true
    }, function (stream) {
      var song = parameters[1];
      if (song === undefined) {
        bot.sendMessage({
          to: channelID,
          message: 'Song invalid'
        });
        return;
      }
      var ytdl = require('ytdl-core');
      var ffmpeg = require('child_process').spawn('ffmpeg', [
        '-i',
        'pipe:0',
        '-f',
        's16le',
        '-ar',
        '48000',
        '-ac',
        '2',
        'pipe:1'
      ]);
      ffmpeg.stdout.once('readable', function () {
        stream.send(ffmpeg.stdout);
      });
      ytdl(song).pipe(ffmpeg.stdin);
      ffmpeg.stdout.on('error', function (err) {
        console.log(err);
      });
    });
  },
  stop: function (bot, user, userID, channelID, message, serverID) {
    /*bot.testAudio({
            channel: "114357261417054215",
            stereo: true
        }, function(stream) {
            console.log(stream);
        });*/
    if (process.platform == 'win32') {
      require('child_process').exec('taskkill /f /im ffmpeg.exe', function (err, stdout, stderr) {
        if (stdout) {
          console.log('stdout:' + stdout);
        }
        if (stderr) {
          console.log('stderr:' + stderr);
        }
        if (err) {
          throw err;
        }
      });
    } else {
      require('child_process').exec('pkill ffmpeg', function (err, stdout, stderr) {
        if (stdout) {
          console.log('stdout:' + stdout);
        }
        if (stderr) {
          console.log('stderr:' + stderr);
        }
        if (err) {
          throw err;
        }
      });
    }
  }
};