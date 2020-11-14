const mongose = require('mongoose');
const Schema = mongose.Schema;

const VoteSchema = new Schema({
    os:{
        type: String,
        required: true
    },
    points:{
        type: String,
        required: true
    }
});

//create collection and add schema
const Vote = mongose.model('Vote', VoteSchema);

module.exports = Vote;
