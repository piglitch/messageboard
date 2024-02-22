var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hey!",
    user: "Emma",
    added: new Date("2024-02-22T08:00:00")
  },
  {
    text: "Good morning!",
    user: "Michael",
    added: new Date()
  },
  {
    text: "How's it going?",
    user: "Sophia",
    added: new Date()
  },
  {
    text: "Hey everyone!",
    user: "Ethan",
    added: new Date()
  },
  {
    text: "Morning folks!",
    user: "Isabella",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form', { title: 'This is where you can add a message'})
})

// Post
router.post('/new', function(req, res){
  const username = req.body.username;
  const message = req.body.message;
  
  res.render ('submitted', { username: username, message: message })
  messages.push({text: message, user: username, added: new Date()})
  res.redirect('/')
})

module.exports = router;
