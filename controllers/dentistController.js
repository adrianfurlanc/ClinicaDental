
const Dentist = require('../models/dentist');

class Doctor {

    async hireDentist(dentist) {
        return Dentist.create(dentist);
    }

    async fireDentist(id) {
        return Dentist.findByIdAndRemove(id);
    }

    async listAllDentists() {
        return Dentist.find();
    }

    async findDentistBySpecialty(specialty) {
        const dentist = await Dentist.findOne({specialty})
        return dentist;
    }

}

let dentistController = new Doctor();
module.exports = dentistController;
