const otpCtrl = require('../controllers/otpCtrl');

const router=require("express").Router();

router.get('/hello',otpCtrl.hello);

// api for requesting otp to phone number coming from frontend
router.post('/requestotp',otpCtrl.requestotp);

// api for verifying otp to phone number coming from frontend, otp also comes
router.post('/verifyotp',otpCtrl.verifyotp);

module.exports=router;