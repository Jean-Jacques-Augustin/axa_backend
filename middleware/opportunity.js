const Opportunity = require('../models/opportunity');
const multer = require("multer");


exports.createOpportunity = async (req, res) => {
    try {
        const {
            numeroOpportunite,
            referenceDossier,
            numeroSiretSiren,
            affaire,
            nomClient,
            intermediaire,
            description,
            presenceCoassurance,
            adresseOperation,
            planAdresseOperation,
            descriptifDetailleOperation,
            coutOperation
        } = req.body;
        const images = req.files.map(file => file.path);
        const newOpportunity = new Opportunity({
            numeroOpportunite,
            referenceDossier,
            numeroSiretSiren,
            affaire,
            nomClient,
            intermediaire,
            description,
            images,
            presenceCoassurance,
            adresseOperation,
            planAdresseOperation,
            descriptifDetailleOperation,
            coutOperation,
        });
        const savedOpportunity = await newOpportunity.save();
        res.status(201).json(savedOpportunity);
    } catch (error) {
        console.error('Error saving opportunity:', error);
        res.status(500).json({error: 'Internal server error'});
    }
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