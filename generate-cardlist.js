const fs = require('fs');
const glob = require('glob');

/**
 * Select all non dotfiles in the `pictures` directory.
 * Prints out to cardlist.js rather than a JSON because of some cross origin issues
 * with loading a local file in Pageres.
 */
glob('pictures/*.*', (err, files) => {
  let content = 'const imageList = ' + JSON.stringify(files, null, 2) + ';';
  fs.writeFile('generated/cardlist.js', content, (err) => { if (err) console.log(err); });
});
