const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();

module.exports = async({ memesToCreate = 25 } = {}) => {
  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.animal(),
    image: chance.url({ path: 'images' }),
    bottom: chance.sentence(5),
  }))); 
};
