var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Opportunity', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Unable to connect to the database');
    console.log(err);
});