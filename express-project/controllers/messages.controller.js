const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'messages to my friends!',
    friend: 'vaishali',
  });
}

function postMessage(req, res){
    console.log('updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
};