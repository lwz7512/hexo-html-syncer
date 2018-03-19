'use strict'

module.exports = function modExports(args) {
  var fs = require('hexo-fs');
  var path = require('path');

  console.log('syncer is running .....');
  if(!args._.length) return console.log('NO artile url provided!');

  var url = args._[0];
  // console.log(url);

  var hexo = this;
  // console.log(hexo);

  var imagesPath = path.join(hexo.source_dir, 'images');
  if(!fs.existsSync(imagesPath)) fs.mkdirsSync(imagesPath);

  require('./convertor')(url, 'images')
  .then(result =>{

    // 1. create markdown file
    require('./post')(hexo, result.title, result.markdown);

    // 2. download images needed
    require('./imgdown')(result.urls, imagesPath).then(()=>{
      console.log('All Images Downloaded!');
    });
  });

};
