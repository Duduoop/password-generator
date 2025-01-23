const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*(),./;'[]/*-+";

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generate);

const result = document.getElementById("result");
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyPasswrord);

function generate() {
    let character = "";
    if(document.getElementById("lowercase-option").checked) {
        character += lowercase;
    }
     if (document.getElementById("uppercase-option").checked) {
        character += uppercase;
    }
     if (document.getElementById("number-option").checked) {
        character += numbers;
    }
     if (document.getElementById("special-option").checked) {
        character += symbols;
    }
    if	(character != ""){
    const length = Number(document.getElementById("password-length").value);
    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * character.length);
        password += character[index]; 
        }
     result.value = password;
    }
}

function copyPassword() {
  const copyText = restult;
  
  copyText.select();
  copyText.setSelectionRange(0, copyText.value.length);
  
  navigator.clipboard.writeText(copyText.value);
  alert("Password Copied: " + copyText.value);
}