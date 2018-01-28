const express = require('express');
const router = express.Router();
const models = require('../models');

/* GET all favorites. */
router.get('/favorites', async (req, res) => {
  res.json(
    await models.Favorites.findAll()
  );
});

/* GET one favorite. */
router.get('/favorites/:id', async (req, res) => {
  res.json(
    await models.Favorites.find({
      where: {id: req.params.id}
    })
  );
});

/* CREATE one favorite. */
router.post('/favorites', async (req, res) => {
  const favorite = await models.Favorites.create({
    order: req.body.order,
    name: req.body.name
  });
  res.json(favorite);
  res.io.broadcast.emit("favorite created", favorite );
});

/* UPDATE one favorite. */
router.patch('/favorites/:id', async (req, res) => {
  let favorite = await models.Favorites.find({
    where: {id: req.params.id}
  });
  favorite = await favorite.updateAttributes(req.body.updates);
  res.json(favorite);
  res.io.broadcast.emit("favorite updated", favorite );
});

/* DELETE one favorite. */
router.delete('/favorites/:id', async (req, res) => {
  const favorite = await models.Favorites.destroy({
    where: {id: req.params.id}
  });
  res.json(favorite);
  if(favorite){
    res.io.broadcast.emit("favorite deleted", req.params.id );
  }
});

module.exports = router;