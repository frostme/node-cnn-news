var FeedParser = require('feedparser'),
    http       = require('http');
var res = function(cb){
  return function(response){
    var feedMeta,
        articles = [];

    response.pipe(new FeedParser({})).on('error', function(error){
      return cb(error, null);
    }).on('meta', function(meta){
      feedMeta = meta;
    }).on('readable', function(){
      var stream = this, item;
      while(item = stream.read()){
        articles.push(item);
      }
    }).on('end', function(){
      return cb(null, feedMeta, articles);
    });
  };
};

var get = function(module, cb){ http.get('http://rss.cnn.com/rss/' + module + '.rss', res(cb)); };

var funct = function(url){ return function(cb){ get(url, cb); }; };
module.exports = {
  top: funct('cnn_topstories'),
  world: funct('cnn_world'),
  us: funct('cnn_us'),
  business: funct('money_latest'),
  politics: funct('cnn_allpolitics'),
  crime: funct('cnn_crime'),
  technology: funct('cnn_tech'),
  health: funct('cnn_health'),
  entertainment: funct('cnn_showbiz'),
  travel: funct('cnn_travel'),
  living: funct('cnn_living'),
  video: funct('cnn_freevideo'),
  studentNews: funct('cnn_studentnews'),
  latest: funct('cnn_latest'),
  ireport: function(cb){ http.get('http://rss.ireport.com/feeds/oncnn.rss', res(cb)); }
};
