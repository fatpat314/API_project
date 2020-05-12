const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: { type: String, required: true },
    songs: [{ type: Array, ref:'Songs'}],
    period: {type: Array, required: true}

});

module.exports = mongoose.model("Artist", ArtistSchema);
