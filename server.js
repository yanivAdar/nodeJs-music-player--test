const mongoose = require('mongoose');
const PlRouter = require('./routes/playlistRouter.js');
const Bodyparser = require('body-parser');
const async = require('async');
const express = require('express');
const server = express();

server.use(Bodyparser.json());
server.use(Bodyparser.urlencoded({ extended: true }));
server.use('/playlist', PlRouter);
server.use(express.static('public'));

// const Student = mongoose.model('Student', studentSchema);

// Student.find({}, (err, data) => {
//     console.log(data);
// });

// Student.find({ name: 'abc' }, (err, data) => {
//     console.log(data);
// });

// Student.find({ name: 'abc' }, 'grade last', (err, data) => {
//     console.log(data);
// });

// Student.find({ grade: { $gt: 50, $lt } }, 'name', (err, data) => {
//     console.log(data);
// });

// Student.remove({ name: abc }, err => {
//     console.log(data);
// });
console.log('ok');
const connectToDatabase = cb => mongoose.connect('mongodb://localhost:27017/playlist', { useMongoClient: true }, err => cb(err))
const connectToServer = cb => server.listen(80, (err) => cb(err));
async.waterfall([
    connectToDatabase,
    connectToServer
], err => {
    if (!err) {
        console.log('all connected');
    }
    return (err);
});