const app = require('../app');
const request = require('supertest');
const Author = require('../author/author.model');
const mongoose = require('mongoose');
const authorId = new mongoose.Types.ObjectId;

var prepareData = async () => {
  runTests();
}

var runTests = () => {
  describe('Create Author', () => {
    let data = {
      "_id": authorId.toString(),
      "name": "dummyAuthor"
    }
    it('respond with 200 created', (done) => {
      request(app)
      .post('/api/author')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Index Author', () => {
    it('respond with json containing a list of all authors', (done) => {
      request(app)
      .get('/api/author')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe('Show Author', () => {
    it('respond with json containing a author', (done) => {
      request(app)
      .get('/api/author/' + authorId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (!('name' in res.body)) throw new Error("missing name key");
        if (!('_books' in res.body)) throw new Error("missing books key");
      })
      .expect(200, done);
    });
  });

  describe('Create a invalid Author', () => {
    let data = {}
    it('respond with 400 no name', (done) => {
      request(app)
      .post('/api/author')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Delete Author', () => {
    it('Respond with Author Deleted', (done) => {
      request(app)
      .delete('/api/author/' + authorId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /text\/html/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });
}

prepareData();
