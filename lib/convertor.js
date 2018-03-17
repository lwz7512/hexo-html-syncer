
'use strict';

module.exports = function modExports(url, markdownPath, articlesPath) {

  var fs = require('fs');
  var request = require('request');
  var cheerio = require("cheerio");
  var TurndownService = require('turndown')


  var turndownService = new TurndownService();

  var options = {url: url, encoding: 'utf8'};
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

    // xx. write to html
    // fs.writeFile(articlesPath+'/page_x.html', cleanup, 'utf8', err => {
    //   if(err) console.log('write file ERROR!');
    //   console.log('file write completed!');
    // });

    // xxx. convert to markdown
    var markdown = turndownService.turndown(cleanup);
    fs.writeFile(markdownPath+'/markdown_x.md', markdown, 'utf8', err => {
      if(err) console.log('markdown file ERROR!');
      console.log('markdown write completed!');
    });



  });

  console.log('loading...');
}
