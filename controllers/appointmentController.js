const Appointment = require('../models/appointment');
const User = require('../models/user');
const Dentist = require('../models/dentist');

class Visit {

    async findAllAppointments(){
        return Appointment.find()
    }

    async findAppointmentsByUser(iddata){
        return Appointment.find({usuario: iddata.usuario})
    }

    async createAppointment(appointment){
        const id = appointment.id;
        const doctor = appointment.doctor
        return Appointment.create(appointment)
    }

    async findActiveAppointments(){
        return Appointment.find({isActive: "true"})
    }

    async findNoActiveAppointments(){
        return Appointment.find({isActive: "false"})
    }

    async modifyAppointment(data){
        return Appointment.findByIdAndUpdate({_id: data.id },
            //Datos que cambiamos
            {isActive: data.isActive },
            {new:true,omitUndefined:true})
    }

    //Add doctor to appointment --> async
    //Find a function that would add a dentist depending on the clients treatment need.

    async eliminateAppointment(bodyData){
        return Appointment.findByIdAndRemove(bodyData)
    }

    // async allLessons(){
    //     return Lesson.find().populate('coaches');
    // }

}

let appointmentController = new Visit();
module.exports = appointmentController;