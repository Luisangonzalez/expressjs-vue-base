const request = require('supertest');

const app = require('../../dist/app').app;

const expect = require('chai').expect;

describe('Test API REST', function() {

  it('/phone respond phone json ', function(done) {
    request(app).get('/api')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(function(response) {
      expect(response.text).to.be.string('Hello world');
    }).expect(200).end(done);
  });

});
