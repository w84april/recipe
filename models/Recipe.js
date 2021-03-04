const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    recipename: {type: String, required: true},
    recipetext: {type: String, required: true},
    date: {type: Date, default: Date.now},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Recipe', schema)