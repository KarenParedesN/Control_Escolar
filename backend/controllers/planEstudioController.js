const Plan = require('../models/PlanEstudio');

exports.create = async (req, res) => {
const nuevo = new Plan(req.body);
res.json(await nuevo.save());
};

exports.read = async (req, res) => {
res.json(await Plan.find().populate('carrera'));
};

exports.update = async (req, res) => {
res.json(await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.delete = async (req, res) => {
await Plan.findByIdAndDelete(req.params.id);
res.sendStatus(204);
};