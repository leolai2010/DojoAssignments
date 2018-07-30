var mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})
mongoose.model('Person', PersonSchema); 