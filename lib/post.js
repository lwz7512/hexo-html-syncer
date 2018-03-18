'use strict';

module.exports = function modExports(hexo, title, content) {
  // console.log('create post: '+title);
  var fs = require('fs');
  hexo.post.create({title: title, layout: 'post', date: new Date()})
  .error(err => {
    console.error(err);
  })
  .then(file => {
    // console.log('----- post path ------');
    // console.log(file.path);
    // console.log('----- init cotn ------');
    // console.log(file.content);
    // console.log('----- remote ct ------');
    // console.log(content);
    fs.writeFile(file.path, file.content+content, 'utf8', err => {
      if(err) console.log('markdown file ERROR!');
      console.log('markdown write completed!');
    });
  });

}
