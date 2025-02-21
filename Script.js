document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const mainContainer1 = document.querySelector(".main-container-1");
    const mainContainer2 = document.querySelector(".main-container-2");
    const mainContainer3 = document.querySelector(".main-container-3");
    const continueBtn = document.querySelector(".btn");
    const otpVerifyBtn = document.querySelector(".otp-verify-btn");
    const otpInputs = document.querySelectorAll(".otp-input");


    mainContainer3.style.display = "none";


    continueBtn.addEventListener("click", function () {
        const emailValue = emailInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        if (emailValue === "") {
            alert("Email field cannot be empty.");
            return;
        } else if (!emailValue.endsWith("@marmeto.com")) {
            alert("Please enter a valid Marmeto email (e.g., user@marmeto.com).");
            return;
        }

        if (phoneValue === "") {
            alert("Phone number field cannot be empty.");
            return;
        }

        mainContainer1.style.display = "none";
        mainContainer2.style.display = "block";

        otpInputs[0].focus(); 
    });

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const nextInput = otpInputs[index + 1];

            if (e.target.value.length === 1 && nextInput) {
                nextInput.focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "") {
                const prevInput = otpInputs[index - 1];
                if (prevInput) {
                    prevInput.focus();
                }
            }
        });
    });
    otpVerifyBtn.addEventListener("click", function () {
        const enteredOTP = Array.from(otpInputs).map(input => input.value).join("");

        if (enteredOTP === "2025") {
            alert("OTP Verified Successfully!");
            mainContainer2.style.display = "none";
            mainContainer3.style.display = "flex";
        } else {
            alert("Invalid OTP. Please try again.");
        }
    });
});
