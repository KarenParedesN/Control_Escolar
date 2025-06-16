const mongoose = require('mongoose');

const ProfesorSchema = new mongoose.Schema({
nombre: String,
apellido: String,
correo: String,
carrera: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrera' },
});

module.exports = mongoose.model('Profesor', ProfesorSchema);