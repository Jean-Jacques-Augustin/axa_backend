const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
    informationsGenerales: {
        numeroOpportunite: String,
        referenceDossier: String,
        numeroSiretSiren: String,
        affaire: String,
        nomClient: String,
        intermediaire: String,
        description: String,
        image: String,
        presenceCoassurance: {
            type: String, enum: ['Oui', 'Non']
        }
    }, caracteristiquesTechniques: {
        adresseOperation: String, planAdresseOperation: [String], descriptifDetailleOperation: String, coutOperation: {
            montant1: Number, montant2: Number, montant3: Number
        }
    }
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;