var express = require('express')
var router = express.Router()

// add your routes here

module.exports = router


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
///*******NEW-REGISTRATION/ESR-MATCH_ITERATION1********
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
    res.redirect('register-nmc');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('nhsmail');
  }
});

router.get(/nmc-iteration1-handler/, function (req, res) {
    if(req.query.nmc) {
      res.redirect('../esr-match-iteration1/check-answer-nmc');
} else {
  res.redirect('../esr-match-iteration1/register-nmc');
}
});

///****************************************************
//*******NEW-REGISTRATION/ESR-MATCH-NMC****************
///**************************************************** 

router.get(/email-account-nmc-handler/, function (req, res) {
  if (req.query.radiocontactgroup == 'Yes') {
    res.redirect('../esr-match-nmc/emailconfirm');
  } else if (req.query.radiocontactgroup == 'No') {
    res.redirect('../esr-match-nmc/nonhsemail');
  } else {
    res.redirect('../esr-match-nmc/nhsmail');
  }
});

router.get(/emailconfirm-nmc-handler/, function (req, res) {
  if (req.query.emailconfirm == 'yes') {
    res.redirect('register-nmc');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('nhsmail');
  }
});

///****************************************************
//*******NEW-REGISTRATION/EMAIL_VALIDATION****************
///**************************************************** 

router.get(/nhsmail-handler/, function (req, res) {
  if (req.query.radiocontactgroup == 'Yes') {
    res.redirect('../email-validation/emailnhs');
  } else if (req.query.radiocontactgroup == 'No') {
    res.redirect('../email-validation/nonhsemail');
  } else {
    res.redirect('../email-validation/nhsmail');
  }
});


router.get(/emailnhs-handler/, function (req, res) {
  if (req.query.emailnhs) {
    res.redirect('../email-validation/emailconfirm');
  } else  {
    res.redirect('../email-validation/emailnhs');
  }
});

router.get(/emailconfirmnhs-handler/, function (req, res) {
  if (req.query.emailconfirm == 'yes') {
    res.redirect('../email-validation/email-sent');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('../email-validation/emailnhs');
  }
});

///************************                     
//*******/NOTSIGNEDIN******
//*************************                      
//mother-name//

router.get(/mothername-handler/, function (req, res) {
  if (req.query.firstname == 'firstname' && req.query.lastname=='lastname') {
  res.redirect('mother-nhsnum');
} else {
  res.redirect('mother-name-test')
}
}
);



//motheremail//

router.get(/email-handler/, function (req, res) {
  if (req.query.email) {
    res.redirect('emailconfirm');
  } else if (req.query.emailconfirm == 'emailconfirm') {
    res.redirect('checkansmother-email');
  } else if (req.query.email && req.query.emailconfirm=='emailconfirm') {
    res.redirect('checkansmother-email');
  } else {
    res.redirect('motheremail');
  }
});


//emailconfirm//

router.get(/emailconfirm-handler/, function (req, res) {
  if (req.query.emailconfirm == 'yes') {
    res.redirect('checkansmother-email');
  } else if (req.query.emailconfirm == 'no') {
    res.redirect('motheremail');
  }
});

//mother-nhsnum//


router.get(/nhsnum-handler/, function (req, res) {  
  if (req.query.nhsnum) {
    res.redirect('mother-dob');
  }
  else if (req.query.nhsnum == 'emailconfirm') {
    res.redirect('checkansmother-email');
  }
  else {
      res.redirect('mother-nhsnum')}
  })
  ;
  
///************************                     
//*****SIGNEDIN********
//*************************  