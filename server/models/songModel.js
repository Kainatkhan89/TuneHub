const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, required: true },
  artist:[{ type: Number, required: true }],
  duration: { type: String, required: true },
  genres : [{type:String}],
  releaseYear : {type: Number},
});

songSchema.pre('save', async function (next) {
    try {
      // Get the last song entry
      const lastSong = await this.constructor.findOne({}, {}, { sort: { id: -1 } });
      // Set the new ID value
      this.id = lastSong ? lastSong.id + 1 : 1;
      next();
    } catch (error) {
      next(error);
    }
  });

const Song = mongoose.model('Song', songSchema, 'Song');

module.exports = Song;