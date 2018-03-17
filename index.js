'use strict';

var fs = require('fs');
var path = require('path');

var url = 'http://mp.weixin.qq.com/s/Tp4W-_0MXMvN5Tw3jlrtLg';
var markdownPath = path.join(__dirname, 'markdown');
var articlesPath = path.join(__dirname, 'articles');

var articlesExist = fs.existsSync(articlesPath);
if(!articlesExist) fs.mkdirSync(articlesPath);
var markdownExist = fs.existsSync(markdownPath);
if(!markdownExist) fs.mkdirSync(markdownPath);

// require('./lib/convertor')(url, markdownPath, articlesPath);

hexo.extend.console.register('syncer', 'Display configuration', function(args){
  console.log('syncer is running .....');
});

// ...
