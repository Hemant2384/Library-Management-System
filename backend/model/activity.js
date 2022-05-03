const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    email: { type: String },
    bid: { type: Number, unique: true },
    bname: { type: String },
    date:{type:Date}
})
module.exports = mongoose.model("activity", activitySchema);