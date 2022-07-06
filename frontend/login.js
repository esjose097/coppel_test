
function login(e){
    const email = document.getElementById("email").value;

    if(!validateEmail(email)){
        alert("Please enter a valid email address");
        return;
    }
    window.location.href = "http://localhost:8080/page.html";
}

var input = document.getElementById("email");

input.addEventListener('keypress',function(event){
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("signIn").click();
      }
});

validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@coppel.com$/;
    return re.test(email);    
}