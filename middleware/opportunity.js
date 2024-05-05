const Opportunity = require('../models/opportunity');

exports.createOpportunity = async (req, res) => {
    const opportunity = new Opportunity(req.body);
    await opportunity.save();
    res.status(201).send(opportunity);
};

exports.getOpportunities = async (req, res) => {
    const opportunities = await Opportunity.find();
    res.send(opportunities);
};

exports.getOpportunity = async (req, res) => {
    const opportunity = await Opportunity.findById(req.params.id);
    if (!opportunity) {
        return res.status(404).send();
    }
    res.send(opportunity);
};

exports.updateOpportunity = async (req, res) => {
    const updates = Object.keys(req.body);
    const opportunity = await Opportunity.findById(req.params.id);
    if (!opportunity) {
        return res.status(404).send();
    }
    updates.forEach((update) => opportunity[update] = req.body[update]);
    await opportunity.save();
    res.send(opportunity);
};

exports.deleteOpportunity = async (req, res) => {
    const opportunity = await Opportunity.findByIdAndDelete(req.params.id);
    if (!opportunity) {
        return res.status(404).send();
    }
    res.send(opportunity);
};