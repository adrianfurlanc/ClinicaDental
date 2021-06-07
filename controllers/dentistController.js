const Dentist = require('../models/dentist');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secreta = "Esta clinica apesta";

class Doctor {

    async hireDentist(dentist) {
        dentist.password = await bcrypt.hash(dentist.password, 10);
        return Dentist.create(dentist);
    }

    async logMe(email,password){
        console.log("este es el mail: ", email)
        console.log("este es el password: ", password)
        const dentist =  await Dentist.findOne({email})
        if(!dentist){
            throw new Error('Email does not exist')
        }
        
        if (!await bcrypt.compare(password,dentist.password)){
            throw new Error('Password incorrect')
        }

        const payload = {
            dentistId: dentist._id,
            tokenCreationDate: new Date,
            isDentist: dentist.isDentist
        }
        const token = jwt.sign(payload, secreta)
        return ({token, dentist});
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
