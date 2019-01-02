const express = require('express')
const router = express.Router()
const Models = require('../models/index')
const User = Models.User

router.get('/users', (req, res) => {
  User.find({})
    .sort({ update_at: -1 })
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(2)
      res.json(err)
    })
})

router.get('users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.json(err)
    })
})

router.post('users', (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) {
      res.json(err)
    } else {
      res.json(user)
    }
  })
})

router.put('users/:id', (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.params.id
    },
    {
      $set: {
        name: req.body.name,
        sex: req.body.sex,
        mail: req.body.mail,
        avatarUrl: req.body.avatarUrl
      }
    },
    { new: true }
  )
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.delete('users/:id', (req, res) => {
  User.findOneAndRemove({
    _id: req.params.id
  })
    .then(user => res.send(`${user.name}删除成功`))
    .catch(err => res.json(err))
})

module.exports = router