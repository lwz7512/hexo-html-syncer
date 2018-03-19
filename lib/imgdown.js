'use strict'

module.exports = function modExports(urls, destdir) {

  var fs = require('fs'),
      request = require('request'),
      Promise = require("bluebird");

  var download = function(uri, filename, callback){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  };

  var downloadImgs = function(urls, destdir, callback){
    if(!urls.length){
      callback();
      return;
    }
    console.log('>>> remaining image download queue length: '+urls.length);
    var url = urls.pop();
    var imgPath = url.split('/');
    var imgFile = imgPath[imgPath.length-1];
    download(url, destdir+'/'+imgFile, function(){
      downloadImgs(urls, destdir, callback);
    });
  };

  return new Promise(function(resolve, reject) {
    downloadImgs(urls, destdir, resolve);
  });

};
