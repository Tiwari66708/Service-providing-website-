function openForm() {
  event.preventDefault();
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function Continue() {
  var phoneNumber = document.getElementById("phonenumber").value;
  if (phoneNumber.length !== 10) {
    document.getElementById("phone-error-msg").style.display = "block";
    return;
  }
  
  event.preventDefault();
  document.getElementById("otpform").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  var full = document.getElementById("phonenumber").value;
  document.getElementById("number").innerText = "We have sent you a 4-digit OTP on " + full + " edit";
}

function Ac() {
  event.preventDefault();
  var Account = document.getElementById("Account");
  Account.innerText = "Agrawal Krishna Ramesh";
  document.getElementById("otpform").style.display = "none";
  console.log(Account.innerText);
}

function validateOTP() {
  var otpInputs = document.getElementsByName("otp");
  var otpValue = "";
  otpInputs.forEach(function(input) {
    otpValue += input.value;
  });
  if (otpValue.length !== 4) {
    document.getElementById("error-msg").style.display = "block";
  } else {
    document.getElementById("error-msg").style.display = "none";
    // Your code to validate and submit the OTP
  }
}

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phonenumber").value;
  if (phoneNumber.length !== 10) {
    document.getElementById("phone-error-msg").style.display = "block";
    alert("Please enter a valid phone number");
    return false;
  }

  // Redirect to OTP entry interface
  document.getElementById("myForm").style.display = "none";
  document.getElementById("otpform").style.display = "block";

  return false; // Prevent form submission
}

