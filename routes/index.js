var express = require('express');
var router = express.Router();
var User = require('../model/user.model');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res) {
  User.find({}, (err, data) => {
    if (err) {
      res.status(400).json({ error: 'Data not found' });
    } else {
      res.status(200).json({ resData: data });
    }
  });
});

// POST a new user
router.post('/add', (req, res) => {
  var userObj = new User(req.body);
  userObj.save((err, data) => {
    if (err) {
      res.status(400).json({ msg: 'Some err' });
    } else {
      res.status(200).json({ msg: 'user saved successfully', resData: data });
    }
  });
});

router.put('/add/:id', (req, res) => {
  User.findOneAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    if (err) {
      res.status(400).json({ mssg: 'user not found' });
    } else {
      res.status(400).json({ mssg: 'changes saved', resData: data });
    }
  });
});

router.delete('/add/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(404).json({ mssg: 'Data Not Found' });
    } else {
      res
        .status(200)
        .json({ msg: 'Record deleted succesfully', resData: data });
    }
  });
});

module.exports = router;
