const express = require('express');
const playlistRouter = express.Router();
const middleWares = require('../middle_ware/middleWares.js')

playlistRouter.get('/', middleWares.getAll, (req, res) => res.json(req.data));

playlistRouter.get('/:id', middleWares.getSinglePl, (req, res) => res.json(req.data));

playlistRouter.get('/:id/songs', middleWares.getSinglePl, (req, res) => res.json(req.data.songs));

playlistRouter.put('/', middleWares.newPl, (req, res) => res.status(201).json(req.data.id));

playlistRouter.patch('/:id', middleWares.updatePl, (req, res) => res.status(201).json('success'));

// playlistRouter.post('/:id/songs', (req, res) => )

playlistRouter.delete('/:id',middleWares.deletePl, (req, res) => res.status(201).json({ success: true }));

module.exports = playlistRouter;