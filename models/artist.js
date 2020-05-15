const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: { type: String, required: true, unique: true },
    songs: [{ type: Schema.Types.ObjectId, ref:'Songs'}],
    
    // period: {type: Number, required: true}

});

module.exports = mongoose.model("Artist", ArtistSchema);
