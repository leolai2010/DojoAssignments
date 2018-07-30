var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
    name: {type: String},
    position: {type: String},
    status:{type: String}
}, {timestamps: true})
mongoose.model('Player', PlayerSchema); 