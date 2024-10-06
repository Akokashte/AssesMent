// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the login form
    const form = document.getElementById("sign_up_form");

    hamburger.addEventListener("click", function (event) {
        nav_links.style.display = "none";
        navbar.style.position = "fixed";
        btns.style.display = "none"
        nav_links.style.display = "flex";
        btns.style.display = "flex";
        cross.style.display = "flex"
        hamburger.style.display = "none"
        // mobile_top_bar.style.padding = "1rem 2.2rem"
        // mobile_top_bar.style.marginTop = "0.2rem"
    })

    cross.addEventListener("click", function (event) {
        nav_links.style.display = "none";
        navbar.style.position = "static";
        btns.style.display = "none"
        cross.style.display = "none"
        hamburger.style.display = "flex"
    })


    // Add an event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from the input fields
        const fName = form.fname.value
        const lName = form.lname.value
        const email = form.email.value
        const phoneNumber = form.phoneNumber.value
        const password = form.password.value
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!fName.trim() || !lName.trim()) {
            alert("Invalid Name")
            return
        }

        else if (!emailPattern.test(email)) {
            alert("Invalid email")
            return
        }

        else if (String(phoneNumber).length > 10 || String(phoneNumber).length < 10) {
            alert("Invalid phone number...")
            return
        }

        else if (password.length < 8) {
            alert("password should be minimum 8 characters")
        }

        alert("logged in successfully !")
        // Log the values (you can replace this with your logic)
        console.log(`firstName : ${fName}
            \nlastName :${lName} 
            \nEmail: ${email} 
            \nPhoneNumber: ${phoneNumber} 
            \nPassword: ${password}`)

    });
});
