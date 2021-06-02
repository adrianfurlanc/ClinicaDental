
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

}

let dentistController = new Doctor();
module.exports = dentistController;
