const express=require("express");
const dbconnect = require("./connectors/dbconnection");
const app = express();
const otpservice=require('./routers/otpservice') //Routes for otp verification service
require("dotenv").config();

app.use(express.json());
app.use('/api/user',require('./routers/userRouter'))
app.use('/api/otp',otpservice)

const port=5000;
dbconnect().then(()=>{
    try {
        app.listen(port,()=>{console.log(`Server running on port ${port}`);})
    } catch (error) {
        console.log(error);
    }
})