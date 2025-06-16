const Carrera = require('../models/Carrera');

exports.create = async (req, res) => {
const carrera = new Carrera(req.body);
res.json(await carrera.save());
};

exports.read = async (req, res) => {
res.json(await Carrera.find().populate('planesEstudio'));
};

exports.update = async (req, res) => {
res.json(await Carrera.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.delete = async (req, res) => {
await Carrera.findByIdAndDelete(req.params.id);
res.sendStatus(204);
};
