function login(){
    const name = document.getElementById("l-user-name").value;
    const pass = document.getElementById("l-user-password").value;


    if(!name || !pass){
        alert("Please  enter all the fields");
        return;
    }

    alert("Login successful!");
    window.location.href = "homePage.html";

    
}


class Auth{
    
}