const mongoose = require('mongoose');

const PostgradoSchema = new mongoose.Schema({
nombre: String,
descripcion: String,
responsable: { type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' }
});

module.exports = mongoose.model('Postgrado', PostgradoSchema);