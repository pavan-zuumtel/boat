var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/app', express.static('./app'));

app.get('/', function(request, response) {
  response.sendFile('index.html', { root: __dirname });
  // response.render('index');
  
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost: " +app.get('port'));
});
