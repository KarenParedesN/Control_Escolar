const Postgrado = require('../models/Postgrado');

exports.create = async (req, res) => {
res.json(await new Postgrado(req.body).save());
};

exports.read = async (req, res) => {
res.json(await Postgrado.find().populate('responsable'));
};

exports.update = async (req, res) => {
res.json(await Postgrado.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.delete = async (req, res) => {
await Postgrado.findByIdAndDelete(req.params.id);
res.sendStatus(204);
};