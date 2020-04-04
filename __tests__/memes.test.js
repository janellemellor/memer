const { getMeme, getMemes } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  it('creates a meme', async() => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'hello',
        image: 'https://placedog.net/500',
        bottom: 'meme'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'hello',
          image: 'https://placedog.net/500',
          bottom: 'meme',
          __v: 0
        });
      });
  });  


  it('gets all memes', async() => {
    const memes = await getMemes();

    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('finds a meme by id', async() => {
    const meme = await getMeme();

    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...meme
        });
      });
  });

  it('updates a meme', async() => {
    const meme = await getMeme();

    return request(app)
      .patch(`/api/v1/memes/${meme._id}`)
      .send({ top: 'goodbye' })
      .then(res => {
        expect(res.body).toEqual({
          ...meme,
          top: 'goodbye'
        });
      });
  });

});
// * `PUT /api/v1/memes/:id` to update a meme
// * `DELETE /api/v1/memes/:id` to delete a meme