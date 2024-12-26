
// Function to track the input OTP
const checkOTP = () => {
    verifyBtn.addEventListener("click", () => {
        let inputOTP = [
            document.getElementById("otp-box1").value,
            document.getElementById("otp-box2").value,
            document.getElementById("otp-box3").value,
            document.getElementById("otp-box4").value
        ];
        console.log("Input OTP:", inputOTP);

        verifyOTP(inputOTP);