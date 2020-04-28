const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeriodSchema = new Schema({
    dates: { type: String, required: true },
    artists: [{ type Schema.Types.ObjectId, ref:'Artists'}]

});

module.exports = mongoose.model("Period", PeriodSchema);
