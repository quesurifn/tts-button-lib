var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/watson/:params' , function(req , res) {
  var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
  var fs = require('fs');

var text_to_speech = new TextToSpeechV1({
  username: '36a74140-1f05-44cd-89c8-c12ab76871c4',
  password: 'nmkclW4ZtBVJ'
});

var params = {
  text: 'Hello from IBM Watson',
  voice: 'en-US_AllisonVoice', // Optional voice
  accept: 'audio/wav'
};

// Pipe the synthesized text to a file
res.send(text_to_speech.synthesize(params).pipe(fs.createWriteStream('output.wav')));


});

module.exports = router;
