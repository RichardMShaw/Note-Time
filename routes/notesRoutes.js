const fs = require('fs')
const path = require('path')
const router = require('express').Router()

// your routes go here...
router.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let notes = JSON.parse(data)
      res.json(notes)
    }
  })
})

router.post('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let notes = JSON.parse(data)
      notes.push(req.body)
      fs.writeFile(path.join(__dirname, "../db/db.json"), notes, (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(req.body)
          res.sendStatus(200)
        }
      })
    }
  })
})

router.delete('/notes', (req, res) => {
  console.log(req)
})

module.exports = router