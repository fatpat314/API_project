const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: { type: String, required: true },
    songs: [{ type Schema.Types.ObjectId, ref:'Songs'}],
    dates: {type: String, required: true}

});

module.exports = mongoose.model("Artist", ArtistSchema);
