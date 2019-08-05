var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})



router.get(/email-account-handler/, function (req, res) {
  if (req.query.radiocontactgroup == 'Yes') {
    res.redirect('../esr-match/nmc-gmc');
  } else if (req.query.radiocontactgroup == 'No') {
    res.redirect('../esr-match/nonhsemail');
  } else {
    res.redirect('../esr-match/nhsmail');
  }
});





// add your routes here

module.exports = router
