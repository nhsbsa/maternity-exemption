var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

//new-registration

router.get(/email-account-handler/, function (req, res) {
  if (req.query.radiocontactgroup == 'Yes') {
    res.redirect('../esr-match/nmc-gmc');
  } else if (req.query.radiocontactgroup == 'No') {
    res.redirect('../esr-match/nonhsemail');
  } else {
    res.redirect('../esr-match/nhsmail');
  }
});


//*                      *
//*******Signedin*********
//*                      *


//motheremail

router.get(/email-handler/, function (req, res) {
  if (req.query.email) {
    res.redirect('emailconfirm');
  } else if (req.query.emailconfirm == 'emailconfirm') {
    res.redirect('checkansmother');
  } else if (req.query.email && req.query.emailconfirm=='emailconfirm') {
    res.redirect('checkansmother');
  } else {
    res.redirect('motheremail');
  }
});


//emailconfirm

router.get(/emailconfirm-handler/, function (req, res) {
  if (req.query.emailconfirm == 'yes') {
    res.redirect('checkansmother');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('motheremail');
  }
});

//mother-nhsnum

router.get(/nhsnum-handler/, function (req, res) {
  res.redirect('../signed-in/checkansmother');
});



// add your routes here

module.exports = router
