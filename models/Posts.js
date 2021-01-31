const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostsSchema = new Schema({
    body: String,
    userName: String,
    createdAt: String,
    user: Schema.Types.ObjectId
})

module.exports = mongoose.model('Post', PostsSchema)