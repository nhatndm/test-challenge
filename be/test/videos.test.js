const app = require('../index')
const chai = require('chai')
const request = require('supertest')
const expect = chai.expect

describe('Videos list API Tests', function() {
  
  describe('#GET /videos', function() { 
    it('should get all videos', function(done) { 
      request(app).get('/api/v1/videos')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body.length).to.equal(10); 
          done(); 
        }); 
    });
  });

  describe('#GET /video/:id ', function() { 
    it('should return video detail with id 10', function(done) { 
      request(app).get('/api/v1/videos/10')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body.id).to.equal(10); 
          done(); 
        }); 
    });

    it('should return 404 when request id 100', function(done) { 
      request(app).get('/api/v1/videos/100')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(404); 
          done(); 
        }); 
    });
  });
});
