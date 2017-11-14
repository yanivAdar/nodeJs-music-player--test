const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema ({
        name: String,
        image: String,
        songs: [{
            name: String,
            image: String
        }]
});
const Playlist = mongoose.model('playlists', playlistSchema);
module.exports = Playlist;

