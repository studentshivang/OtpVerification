const userCtrl = require("../controllers/userCtrl");

const router=require("express").Router();

router.get('/hello',userCtrl.hello);

module.exports=router;