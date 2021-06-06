const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dentistSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true
    },
});

const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
};


dentistSchema.set('toJSON', toJSONConfig);


const Dentist = mongoose.model('Dentist', dentistSchema);
module.exports = Dentist;
