var mongoose = require('mongoose');
var LeafSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})
var FlowerSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})
mongoose.model('Flower', FlowerSchema);
mongoose.model('Leaf', LeafSchema); 