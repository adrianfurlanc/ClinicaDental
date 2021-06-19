const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    appointmentDate: {
        type: Date,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId, ref:"user",
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId, ref:"dentist",
        required: true,
    },
    treatment: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
};


appointmentSchema.set('toJSON', toJSONConfig);


const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
