var express = require("express");
var router = express.Router();
const Words = require("../Models/words");
const { find } = require("../Models/words");
/* GET home page. */
router.get("/words", function (req, res, next) {
  Words.find({}, {word: 1, meaning: 1})
    .then((words) => {
      res.json({ words });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.post("/word/add", function (req, res, next) {
  const { word, meaning } = req.body;
  new Words({ word, meaning })
    .save()
    .then(() => {
      res.json({ status: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.post("/word/get", function (req, res, next) {
  const { id } = req.body;

  Words.findById(id)
    .populate("related")
    .then((findedWord) => {
      console.log(findedWord, id)
      res.json({
        word: findedWord.word,
        meaning: findedWord.meaning,
        related: findedWord.related,
        id: findedWord._id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.post("/word/addRelated", function (req, res, next) {
  const { id, relateds } = req.body;

  Words.findById(id)
    .then((findedWord) => {
      findedWord.related.push(relateds);
      findedWord
        .save()
        .then(() => {
          res.json({ status: true });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ err });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

module.exports = router;
