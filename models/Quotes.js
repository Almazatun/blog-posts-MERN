const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuotesSchema = new Schema({
    body: String,
    userName: String,
    createdAt: String,
    user: Schema.Types.ObjectId
})

module.exports = mongoose.model('Quote', QuotesSchema)