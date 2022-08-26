/**
 * submitForm router
 * @exports routers submitForm
 */

 const express = require('express');
 const router = express.Router();
 const { body, validationResult } = require('express-validator');
 const submitFormController = require('./controller');
 // Route and request body validator
 router.post('/submitForm',[
    body('name').escape().isLength({ min: 3, max:50 }).withMessage('Name Length between 3-50 Chars').matches(/^[A-Za-z .,'!&]+$/).withMessage('Name contains character only').trim(),
    body('phoneNumber').escape().isLength({ min: 10, max:10 }).withMessage('Phone number must be 10 digit').matches(/^[0-9 .,'!&]+$/).withMessage('Phone number contains numbers only').trim(),
    body('beneficiaryType').escape().isLength({ min: 1, max:1 }).withMessage('Beneficiary Type length not more than 1 character').matches(/^(?:U|N)$/).withMessage('Beneficiary Type must be U or N').trim(),
    body('tokenNumber').escape().isLength({ max:10 }).withMessage('Beneficiary Type length not more than 10 character').matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('Beneficiary Type should not contains special characters').trim(),
    body('aadhaarNumber').escape().isLength({ min: 12, max:12 }).withMessage('Phone number must be 12 digit').matches(/^[0-9 .,'!&]+$/).withMessage('Aadhaar number contains numbers only').trim(),
    body('vaccinationType').escape().isLength({min: 2, max:2 }).withMessage('Vaccination Type length not more than 2 character').matches(/^(?:CS|CV|SP)$/).withMessage('Beneficiary Type must be CS, CV or SP').trim(),
    body('dose').escape().isLength({ min: 1, max:1 }).withMessage('dose length not more than 1 character').matches(/^(?:1|2)$/).withMessage('dose must be 1 or 2').trim(),
    body('vaccinationCentre').escape().isLength({ min: 3 }).withMessage('Vaccination centre must be more 3 character').trim()
 ], function (req, res) {
    // check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        message: 'Form validation error.',
        errors: errors.array()
      });
    } else {
        submitFormController(req, res);
    } 
  });

  router.get('/submitForm',  function (req, res) {
    res.json({
      message:"Api is runiing on port no : 3000"
    });
  })

 // export all routes
module.exports = router;