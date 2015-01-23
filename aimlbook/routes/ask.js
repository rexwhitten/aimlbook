var express = require('express');
var router = express.Router();
var aiml = require('aiml');

aiml.parseFile('aiml/sample.aiml', function (err, topics) {
    var engine = new aiml.AiEngine('Default', topics, { name: 'Jonny' });
    var responce = engine.reply({ name: 'Billy' }, "Hi, dude", function (err, responce) {
        console.log(responce);
    });
});


/* GET home page. */
router.get('/', function (req, res) {
    var _ask_response = "[no response]";


    res.render('ask', { title: 'Express', ask_response: _ask_response });
});

module.exports = router;