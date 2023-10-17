signupbtn = document.getElementById("signup")
name1 = document.getElementById("name1")
email = document.getElementById("email")
password = document.getElementById("password")
signupbtn.addEventListener("click", function() {
    if (name1.value == "" || email.value == "" || password.value == "") {
        alert("please fill empty fields")

    } else {
        localStorage.setItem("name", name1.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        setTimeout(() => {
            window.location = "signin.html"
        }, 1000)
    }
})