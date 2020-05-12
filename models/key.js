const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeySchema = new Schema({
    name: { type: String, required: true },
    songs: {type: String, required: true},
    key: { type: String, required: false},
    period: {type: String, required: false}
});

module.exports = mongoose.model("Key", KeySchema);
