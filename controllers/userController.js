const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secreta = "Clinica de Adrian y Guillermo";

class Cliente {

    constructor(){
    }

    async logMe(email,password){

        const user =  await User.findOne({email})
        if(!user){
            throw new Error('Email does not exist')
        }
        if (!await bcrypt.compare(password,user.password)){
            throw new Error('Password incorrect')
        }

        const payload = {
            userId: user._id,
            tokenCreationDate: new Date,
            
        }
        const token = jwt.sign(payload, secreta)
        return ({token, user});
    }

    async findAllUsers(){
        return User.find();
    }

    async createUser(user){
        console.log("ahora estoy en controlador", user)
        user.password = await bcrypt.hash(user.password, 10);
        console.log("aqiui estamos ahora", user.password)
        return User.create(user);
    }

    async modifyUser(data) {
        return User.findByIdAndUpdate(
            {_id: data.id },
            //Datos que cambiamos:
            {address: data.address,
            phone: data.phone,
            isActive: data.isActive },{new:true,omitUndefined:true},
        );
    }

    async deleteUser(id) {
        return User.findByIdAndRemove(id)
    }
}



let userController = new Cliente();
module.exports = userController;
