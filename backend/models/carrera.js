const mongoose = require('mongoose');

const CarreraSchema = new mongoose.Schema({
nombre: String,
clave: String,
planesEstudio: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PlanEstudio' }]
});

module.exports = mongoose.model('Carrera', CarreraSchema);