const Evaluacion = require('../models/EvaluacionProfesor');

exports.create = async (req, res) => {
res.json(await new Evaluacion(req.body).save());
};

exports.read = async (req, res) => {
res.json(await Evaluacion.find().populate('profesor'));
};