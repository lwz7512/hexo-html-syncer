'use strict';

var fs = require('fs');
var path = require('path');

// var url = 'http://mp.weixin.qq.com/s/Tp4W-_0MXMvN5Tw3jlrtLg';

hexo.extend.console.register('syncer', 'Display configuration', function(args){
  console.log('syncer is running .....');
  if(!args._.length) return console.log('NO artile url provided!');

  var url = args._[0];
  require('./lib/convertor')(url)
  .then(result =>{
    // console.log('markdown file created?');
    require('./lib/post')(hexo, result.title, result.markdown);
  });

});
