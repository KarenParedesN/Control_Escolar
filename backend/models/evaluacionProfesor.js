const mongoose = require('mongoose');

const EvaluacionSchema = new mongoose.Schema({
profesor: { type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' },
calificacion: Number,
comentarios: String,
fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EvaluacionProfesor', EvaluacionSchema);