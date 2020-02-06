const mongoose = require('mongoose');


const URL = process.env.URL || 'mongodb://localhost/EV_DB';

mongoose.set('useCreateIndex', true);


mongoose.set('useFindAndModify', false);

//Connection establishment
mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
});
