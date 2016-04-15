var fs = require('fs');
var prependFile = require('prepend-file');

var generateAction = function(action, inpm) {
  var readActionTemplate = fs.createReadStream('./templates/actionTemplate.js');
  var writeActionFile = fs.createWriteStream('./js/actions/' + action + '.js');
  readActionTemplate.on('data', function(chunk) {
    var newData = chunk.toString().replace(/name/g, action);
    writeActionFile.write(newData);
    writeActionFile.end();
  });
  readActionTemplate.on('end', function(error) {
    if (error) {
      console.log(error);
    }
    console.log('Action Template Used Successfully')
  });
  if (inpm) {
    inpm.forEach(function(i) {
      console.log('Adding: ' + i);
      var importLine = "import " + i + " from " + "'" + i + "';\n"
      prependFile('./js/actions/' + action + '.js', importLine, function(err) {
        if (err) {
          console.log(err);
        }
        console.log('Successfully created ' + action + '.js');
      });
    });
  } else {
    console.log('Successfuly created ' + action + '.js');
  }
};

module.exports.generateAction = generateAction;