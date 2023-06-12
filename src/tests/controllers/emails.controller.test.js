import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../index.js';

chai.use(chaiHttp);

const { expect } = chai;

describe('guessEmail', () => {
  it('should return an error message if fullName is missing', (done) => {
    chai
        .request(app)
        .get('/api/generate')
        .query({ domain: 'example.com' })
        .end((err, res) => {
          expect(res).to.have.status(422);
          expect(res.text).to.equal('Please provide Full name');
          done();
        });
  });
  it('should return an error message if domain is missing', (done) => {
    chai
        .request(app)
        .get('/api/generate')
        .query({ fullName: 'John' })
        .end((err, res) => {
          expect(res).to.have.status(422);
          expect(res.text).to.equal('Please provide company Domain name');
          done();
        });
  });

  it('should return an error message if fullName is invalid', (done) => {
    chai
        .request(app)
        .get('/api/generate')
        .query({ fullName: 'John', domain: 'example.com' })
        .end((err, res) => {
          expect(res).to.have.status(422);
          expect(res.text).to.equal(
              'Full name should contain first_name and last_name',
          );
          done();
        });
  });
  it('should return an error message if domain is invalid', (done) => {
    chai
        .request(app)
        .get('/api/generate')
        .query({ fullName: 'John Doe', domain: 'example.com' })
        .end((err, res) => {
          expect(res).to.have.status(422);
          expect(res.text).to.equal(
              'Unable to derive email, Please provide a valid domain',
          );
          done();
        });
  });
  it('should send the result if all parameters are valid', (done) => {
    chai
        .request(app)
        .get('/api/generate')
        .query({ fullName: 'John Doe', domain: 'google.com' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('doejohn@google.com');
          done();
        });
  });
});
