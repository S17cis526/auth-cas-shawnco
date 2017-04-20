/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3000;

// Requires
var fs = require('fs');
var https = require('https');
var express = require('express');

// The Express app
var app = express();

// The web server
var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}
var server = https.createServer(options, app);

// Serve files from public folder
app.use(express.static('public'));

// Start the server
server.listen(PORT, function(){
  console.log(PORT);
});
