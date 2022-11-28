import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState();
  const [address, setaddress] = useState("");
  const [isPhoneVerified, setPhoneVerified] = useState(false);
  const [isOtpRequested, setOtpRequested] = useState(false);
  const [Otp, setOtp] = useState(false);

  const sendOtp = async (channel) => {
    try {
      // Template for sending data from F->B
      
      const response = await axios.post("/api/otp/requestotp", {
        phonenumber,
        channel,
      });
      console.log(response.data);
      if (response.data.success === true) {
        setOtpRequested(true);
        toast.success(`Otp sent on ${channel}`);
      } else {
        toast.error("Server issue");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const verifyOtp = async () => {
    try {
      
      const response = await axios.post("/api/otp/verifyotp", {
        phonenumber,
        Otp,
      });
      if (response.data.success === true) {
        setPhoneVerified(true);
        toast.success(`Your OTP verified ${Otp}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitDetails = () => {
    try {
      if (isPhoneVerified === false) {
        toast.warning("Verify phone number first");
      } else {
        toast("Your details Submitted!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form>
        <ToastContainer />
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputPassword1">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Phone no.</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
          />
        </div>

        {isOtpRequested === true ? (
          <>
            <div className="form-group">
              <label for="exampleInputPassword1">
                Enter otp sent to phone number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Otp"
                value={Otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <br />
            <p>
              Didn't received OTP?
              <span
                onClick={() => sendOtp("call")}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Request a call
              </span>
            </p>
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => verifyOtp()}
              >
                Verify Otp
              </button>
            </div>
          </>
        ) : (
          <div className="mt-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => sendOtp("sms")}
            >
              Send Otp
            </button>
          </div>
        )}

        <div className="mt-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => submitDetails()}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
