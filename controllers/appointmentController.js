const Appointment = require('../models/appointment');
const User = require('../models/user');
const Dentist = require('../models/dentist');

class Visit {

    async findAllAppointments(){
        return Appointment.findAll();
    }

    async createAppointment(appointment){
        const id = appointment.id;
        const doctor = appointment.doctor
        return Appointment.create(appointment)

    }

    //Find the pending appointments --> async

    

    //Add doctor to appointment --> async

    async eliminateAppointment(bodyData){
        return Appointment.destroy({where: {id: bodyData.id}})
    }

    
}



let appointmentController = new Visit();
module.exports = appointmentController;