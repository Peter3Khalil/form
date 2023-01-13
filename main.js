function validate(){
   let password = document.getElementById("password");
   let confirmPassword = document.getElementById("confirmPassword");
   if(password.value !== confirmPassword.value){
    alert("Please confirm password");
    return false;
   }
}