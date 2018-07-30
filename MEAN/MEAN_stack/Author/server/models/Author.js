var mongoose = require('mongoose');
var AuthorSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})
mongoose.model('Author', AuthorSchema); 