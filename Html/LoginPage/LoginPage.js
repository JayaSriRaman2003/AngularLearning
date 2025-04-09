function LoginUser(){
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const display = document.getElementById("msg");

    if(!email || !password){
        display.textContent = "Please fill in all fields.";
        display.className = "text-danger mt-3 fw-bold text-center";
      }else{
        display.textContent = "User Loggedin successfully!";
        display.className = "text-success mt-3 fw-bold text-center";
      }

      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
}