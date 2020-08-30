const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name:
        {
            type:String,
            required: true
        },
        phone:
        {
            type: String,
            required: true
        },
        time:
        {
            type:String,
            required: true
        }
        
    }
)

module.exports = mongoose.model('user',UserSchema);