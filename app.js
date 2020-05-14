const getPosts = require('./get/getPosts'),
      fs = require('fs'),
      minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
  alias: {
    u: 'url',
    f: 'file',
    h: 'help',
    v: 'version'
  }
});

console.log(args._[0]);

const URL = args._[0],
      FILENAME = args._[1];

getPosts(URL).then((res) => {
  const file = JSON.stringify(res, undefined, 2);
  fs.writeFile(FILENAME + '.json', file, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
