let msgContainer = document.querySelector(".msg-container");
let getBtn = document.getElementById("get-otp");
let verifyBtn = document.getElementById("verify-btn");
let msgShow = document.getElementById("msg");

// Global variable to store the generated OTP
let generatedOTP = "";

// Function to generate 4 digit OTP
const genOTP = () => {
    generatedOTP = Math.floor(Math.random() * 9000 + 1000).toString();
    console.log("Generated OTP:", generatedOTP);

    showOTP(generatedOTP);
}

// Function to display the OTP
const showOTP = (generatedOTP) => {
   msgContainer.classList.remove("hide");
   document.getElementById("show-otp").innerText = `Your OTP is ${generatedOTP}`;
}

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
    });
}

// Final step verify the OTP Function to  verify OTP
const verifyOTP = (inputOTP) => {
    let inputOTPString = inputOTP.join('');//input  OTP data type is object and generated OTP data type is number so easy comparison both to convert in string

    // Compare input OTP with the generated OTP
    if (generatedOTP === inputOTPString) {
        alert("OTP is right");
        verifyBtn.style.backgroundColor = "#4cd137";
    } else {
        alert("OTP is wrong");
         verifyBtn.style.backgroundColor = "red";
    }
}

checkOTP();
getBtn.addEventListener("click", genOTP);
