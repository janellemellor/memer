const Meme = require('../lib/models/Meme');

module.exports async({ memesToCreate = 25 } = {}) => {

    const memes = await Meme.create([...Array(memesToCreate)].map(() => ({
        top: ,
        image: ,
        bottom: ,
    }))); 
};
