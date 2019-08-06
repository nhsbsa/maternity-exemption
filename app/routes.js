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

//signedin/email-confirm

router.get(/emailconfirm-handler/, function (req, res) {
  if (req.query.emailconfirm == 'yes') {
    res.redirect('check-answer-mother');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('mother-email-address');
  }
});

//signed/mother-email-address

router.get(/email-handler/, function (req, res) {
  if (req.query.email) {
    res.redirect('email-confirm');
  } else if (req.query.emailconfirm == 'emailconfirm') {
    res.redirect('check-answer-mother');
  } else if (req.query.email && req.query.emailconfirm) {
    res.redirect('check-answer-mother');
  } else {
    res.redirect('mother-email-address');
  }
});




// add your routes here

module.exports = router
