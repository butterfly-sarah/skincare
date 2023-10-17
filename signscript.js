signinbtn = document.getElementById("signin")
email = document.getElementById("email")
password = document.getElementById("password")
localemail = localStorage.getItem("email")
localpass = localStorage.getItem("password")
signinbtn.addEventListener("click", function() {
    if (email.value == "" || password.value == "") {
        alert("please fill empty fields")

    } else {
        if (localemail == email.value & localpass == password.value) {
            setTimeout(() => {
                window.location = "products.html"
            }, 1000)
        } else {
            alert("invalid email or password")
        }
    }
})