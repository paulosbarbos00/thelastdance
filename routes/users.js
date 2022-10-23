var express = require('express');
var router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Get a user')
  })
  .post((req, res) => {
    res.send('Add a user')
  })
  .put((req, res) => {
    res.send('Update the user')
  })
  .delete((req, res) => {
    res.send('User is deleted')
  })

router.get('/:userId', (req, res) => {
  res.render('users', { title: req.params.userId })
})

module.exports = router;
