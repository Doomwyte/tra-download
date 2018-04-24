var wget = require('wget-improved');
var src = 'http://nodejs.org/images/logo.svg';
var output = './logo.svg';
var options = {
  proxy: 'http://198.161.14.25:8080'
};
var download = wget.download(src, output, options);
download.on('error', function(err) {
    console.log(err);
});
download.on('start', function(fileSize) {
    console.log(fileSize);
});
download.on('end', function(output) {
    console.log(output);
});
download.on('progress', function(progress) {
    // code to show progress bar
});