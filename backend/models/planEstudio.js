const mongoose = require('mongoose');

const PlanEstudioSchema = new mongoose.Schema({
nombre: String,
descripcion: String,
carrera: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrera' }
});

module.exports = mongoose.model('PlanEstudio', PlanEstudioSchema);