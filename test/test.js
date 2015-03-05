var cnn    = require('../index');
var chai   = require('chai');
var expect = chai.expect;
var assert = chai.assert;
chai.should();
describe('cnn', function(){
  describe('#top', function(){
    it('should return top stories', function(done){
      cnn.top(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Top Stories');
        done();
      });
    });
  });
  describe('#world', function(){
    it('should return world stories', function(done){
      cnn.world(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - World');
        done();
      });
    });
  });
  describe('#us', function(){
    it('should return us stories', function(done){
      cnn.us(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - U.S.');
        done();
      });
    });
  });
  describe('#business', function(){
    it('should return business stories', function(done){
      cnn.business(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('Latest financial news - CNNMoney.com');
        done();
      });
    });
  });
  describe('#politics', function(){
    it('should return politics stories', function(done){
      cnn.politics(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Politics');
        done();
      });
    });
  });
  describe('#crime', function(){
    it('should return crime stories', function(done){
      cnn.crime(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Crime');
        done();
      });
    });
  });
  describe('#technology', function(){
    it('should return technology stories', function(done){
      cnn.technology(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Technology');
        done();
      });
    });
  });
  describe('#health', function(){
    it('should return health stories', function(done){
      cnn.health(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Health');
        done();
      });
    });
  });
  describe('#entertainment', function(){
    it('should return entertainment stories', function(done){
      cnn.entertainment(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Entertainment');
        done();
      });
    });
  });
  describe('#travel', function(){
    it('should return travel stories', function(done){
      cnn.travel(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Travel');
        done();
      });
    });
  });
  describe('#living', function(){
    it('should return livign stories', function(done){
      cnn.living(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Living');
        done();
      });
    });
  });
  describe('#video', function(){
    it('should return video stories', function(done){
      cnn.video(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com - Video');
        done();
      });
    });
  });
  describe('#studentNews', function(){
    it('should return student stories', function(done){
      cnn.studentNews(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com');
        done();
      });
    });
  });
  describe('#latest', function(){
    it('should return latest stories', function(done){
      cnn.latest(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN.com Recently Published/Updated');
        done();
      });
    });
  });
  describe('#ireport', function(){
    it('should return ireports', function(done){
      cnn.ireport(function(error, meta, articles){
        expect(articles.length).to.not.equal(0);
        expect(meta.title).to.equal('CNN iReport - Vetted');
        done();
      });
    });
  });
});
