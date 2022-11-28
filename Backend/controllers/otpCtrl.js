const otpCtrl = {
  hello: async (req, res) => {
    try {
      return res
        .status(200)
        .json({ success: true, message: "hello from otp router" });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  },
  requestotp:async (req,res) => {
    try {
      console.log(req.body);
      const { phonenumber, channel } = req.body; 
      console.log(`Otp sent on ${phonenumber} through ${channel}`);

      return res.status(200).json({
        success: true,
        message: `Otp sent on ${phonenumber} through ${channel}`,
      });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  },
  verifyotp: async (req, res) => {
    try {
      const { phonenumber, Otp } = req.body;
      console.log(phonenumber, Otp);
      return res.json({ success: true });
    } catch (error) {
      return res.json({ success: false, error: error.message });
    }
  },
};
module.exports = otpCtrl;
