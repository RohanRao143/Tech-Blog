/*mongoose*/
var mongoose = require('mongoose')
    mongoose.connect("mongodb://localhost/TechBlog");

var PostSchema = new mongoose.Schema({
    title:String,
    categories:String,
    content:String
});

module.exports = mongoose.model('Posts', PostSchema);
