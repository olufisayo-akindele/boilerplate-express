let express = require('express');
let app = express();

//require('dotenv').config() and you will need to (Create a .env file in the root of your project directory, and store the variable MESSAGE_STYLE=uppercase in it.)

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
    const helloJSON = 'Hello json';
    let message;
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = helloJSON.toUpperCase();
    } else {
        message = helloJSON;
    }
    const data = {
        "message": message
    };
    res.json(data);
})

app.get('/', function(req, res) {
    const filePath = __dirname + '/views/index.html';
    console.log(filePath);
    res.sendFile(filePath);
});






























module.exports = app;