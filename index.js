'use strict';


// var url = 'https://www.meipian.cn/15x3nh7m'; //@2018/03/16 - 可以卑微如尘，不可扭曲如蛆虫
// var url = 'http://mp.weixin.qq.com/s/Tp4W-_0MXMvN5Tw3jlrtLg'; //@2018/03/17 - 黎明守夜人
// var url = 'http://mp.weixin.qq.com/s/Uuj60qopwWicngpEbZcNRQ'; //@2018/03/19 - 二月二龙抬头，以万物为刍狗

hexo.extend.console.register('syncer', 'Download article by url, then conver to post', {
  desc: 'request the article then process to simple version of markdown, also images save to local.',
  usage: 'hexo syncer <url of article>',
}, require('./lib/core').bind(hexo));
