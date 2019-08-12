var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

//******************************************
//*******NEW-REGISTRATION/ESR-MATCH*********
//****************************************** 

router.get(/email-account-handler/, function (req, res) {
  if (req.query.radiocontactgroup == 'Yes') {
    res.redirect('../esr-match/nmc-gmc');
  } else if (req.query.radiocontactgroup == 'No') {
    res.redirect('../esr-match/nonhsemail');
  } else {
    res.redirect('../esr-match/nhsmail');
  }
});



///****************************************************
//*******NEW-REGISTRATION/ESR-MATCH_ITERATION1*********
///**************************************************** 

router.get(/email-account-iteration1-handler/, function (req, res) {
  if (req.query.radiocontactgroup == 'Yes') {
    res.redirect('../esr-match-iteration1/emailconfirm');
  } else if (req.query.radiocontactgroup == 'No') {
    res.redirect('../esr-match-iteration1/nonhsemail');
  } else {
    res.redirect('../esr-match-iteration1/nhsmail');
  }
});

router.get(/emailconfirm-iteration1-handler/, function (req, res) {
  if (req.query.emailconfirm == 'yes') {
    res.redirect('nmc-gmc');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('nhsmail');
  }
});

router.get(/nmc-iteration1-handler/, function (req, res) {
    res.redirect('../esr-match-iteration1/check-answer-nmc');
});



///************************                     
//*******SIGNEDIN**********
//*************************                       


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
  if (req.query.nhsnum) {
    res.redirect('mother-dob');
  }
  else if (req.query.nhsnum == 'emailconfirm') {
    res.redirect('checkansmother');
  }
  else {
      res.redirect('mother-nhsnum')}
  })
  ;
  
  






// add your routes here

module.exports = router
