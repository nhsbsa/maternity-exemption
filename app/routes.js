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
    res.redirect('checkansmother');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('motheremail');
  }
});

//signed/mother-email-address

router.get(/email-handler/, function (req, res) {
  if (req.query.motheremail) {
    res.redirect('emailconfirm');
  } else if (req.query.emailconfirm == 'emailconfirm') {
    res.redirect('checkansmother');
  } else if (req.query.motheremail && req.query.emailconfirm) {
    res.redirect('checkansmother');
  } else {
    res.redirect('motheremail');
  }
});




// add your routes here

module.exports = router
