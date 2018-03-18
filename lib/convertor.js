'use strict';

module.exports = function modExports(url) {

  var fs = require('fs');
  var Promise = require("bluebird"); // @2018/02/23
  var request = require('request');
  var cheerio = require("cheerio");
  var TurndownService = require('turndown');

  var turndownService = new TurndownService();

  var options = {url: url, encoding: 'utf8'};

  return new Promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      if (error) {
        console.log('error:', error); // Print the error if one occurred
        return;
      }
      // console.log('body:', body); // Print the HTML for the Google homepage.
      var $ = cheerio.load(body);

      var title = $('title').text();
      console.log(title);

      // 1. remove scripts/style
      $('script').remove();
      $('style').remove();

      // x. clean html content
      var cleanup = $.html();

      // xxx. convert to markdown
      var markdown = turndownService.turndown(cleanup);
      resolve({
        title: title,
        markdown: markdown
      });

    });
  });

}
