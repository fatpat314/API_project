const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongsSchema = new Schema({
    song: { type: String, required: true },
    artist: {type: String },
    // genre: { type: String, required: true},
    key: { type: String },
    // period: {type: String, required: false}
});

module.exports = mongoose.model("Songs", SongsSchema);
