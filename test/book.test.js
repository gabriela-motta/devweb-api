const app = require('../app');
const request = require('supertest');
const Book = require('../book/book.model');
const mongoose = require('mongoose');
const bookId = new mongoose.Types.ObjectId;

describe('Index Book', () => {
  it('respond with json containing a list of all books', (done) => {
    request(app)
    .get('/api/book')
    .set('Accept', 'application/json')
    .expect('Content-Type', /text\/html/)
    .expect(200);
    done();
  });
});

describe('Show Book', () => {
  it('respond with json containing a book', (done) => {
    request(app)
    .get('/api/book/' + bookId.toString())
    .set('Accept', 'application/json')
    .expect('Content-Type', /text\/html/)
    .expect((res) => {
      if (!('title' in res.body)) throw new Error("missing title key");
      if (!('author' in res.body)) throw new Error("missing author key");
      if (!('sinopsis' in res.body)) throw new Error("missing sinopsis key");
    })
    .expect(200);
    done();
  });
});

describe('Create Book', () => {
  let data = {
    "name": "dummy",
    "author": "5bafd080144bff32506782ec"
  }
  it('respond with 200 created', (done) => {
    request(app)
    .post('/api/book')
    .send(data)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err) => {
      if (err) return done(err);
    });
    done();
  });
});

describe('Create Book', () => {
  let data = {
    "name": "dummy"
  }
  it('respond with 400 no author', (done) => {
    request(app)
    .post('/api/book')
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

describe('Delete Book', () => {
  it('Respond with Book Deleted', (done) => {
    request(app)
    .delete('/api/book/' + bookId.toString())
    .set('Accept', 'application/json')
    .expect('Content-Type', /text\/html/)
    .expect(200)
    .end((err) => {
      if (err) return done(err);
      done();
    });
  });
});
