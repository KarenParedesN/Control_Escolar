const Profesor = require('../models/Profesor');
const Evaluacion = require('../models/EvaluacionProfesor');

exports.create = async (req, res) => {
const nuevo = new Profesor(req.body);
const guardado = await nuevo.save();
res.json(guardado);
};

exports.read = async (req, res) => {
const lista = await Profesor.find().populate('carrera');
res.json(lista);
};

exports.update = async (req, res) => {
const actualizado = await Profesor.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(actualizado);
};

exports.delete = async (req, res) => {
await Profesor.findByIdAndDelete(req.params.id);
res.sendStatus(204);
};

exports.evaluarProfesor = async (req, res) => {
const evaluacion = new Evaluacion({
    profesor: req.params.id,
    ...req.body
});
const guardada = await evaluacion.save();
res.json(guardada);
};