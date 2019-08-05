var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})



router.get(/email-account-handler/, function (req, res) {
  if (req.query.radiocontactgroup == 'Yes') {
    res.redirect('../new-registration/nmc-gmc');
  } else if (req.query.radiocontactgroup == 'No') {
    res.redirect('../new-registration/nonhsemail');
  } else {
    res.redirect('../new-registration/nhsmail');
  }
});





// add your routes here

module.exports = router
