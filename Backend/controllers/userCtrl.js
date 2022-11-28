const userCtrl={
    hello:async(req,res)=>{
        try {
            return res.status(400).json({success:true,message: "hello from user router"});
        } catch (error) {
            return res.status(200).json({success:false,error:error.message});
        }
    }
};
module.exports=userCtrl;