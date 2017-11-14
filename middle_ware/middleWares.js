const express = require('express');
const playlistRouter = express.Router();
const Playlist = require('../model/playlist.model.js');

const errRes = res => res.json({ status: 400, msg: 'something went wrong' });
const recivedData = (req, res, err, data, next) => {
    if (!err) {
        req.data = data;
        return next();
    }
    return errRes(res);
}

const newPl = (req, res, next) => {
    const p = new Playlist(req.body);
    console.log(req.body);
    p.save((err, data) => {
        return recivedData(req, res, err, data, next);
    })
}

const getAll = (req, res, next) => {
    Playlist.find({}, (err, data) => {
        return recivedData(req, res, err, data, next);
    })
}
const getSinglePl = (req, res, next) => {
    Playlist.findById(req.params.id, (err, data) => {
        return recivedData(req, res, err, data, next);
    })
}
const updatePl = (req, res, next) => {
    const updatedData = { name: req.body.name, image: req.body.image };
    Playlist.update({ _id: req.params.id }, updatedData, (err, data) => {
        return recivedData(req, res, err, data, next);
    })
}

const deletePl = (req, res, next) => {
    Playlist.remove({ _id: req.params.id }, (err, data) => {
        return recivedData(req, res, err, data, next);
    })
}

module.exports = {
    newPl,
    getAll,
    getSinglePl,
    updatePl,
    deletePl
};