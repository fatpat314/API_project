const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongsSchema = new Schema({
    name: { type: String, required: true },
    artist: {type: Schema.Types.ObjectId, ref:},
    genre: { type: String, required: true},
    key: { type: String, required: false}
});

module.exports = mongoose.model("Songs", SongsSchema);
