// On page load, check if a theme is stored in localStorage
var storedTheme = localStorage.getItem('selected-theme');
if (storedTheme) {
    // Apply the stored theme
    document.getElementById('theme').setAttribute('href', storedTheme + '.css');
}


function ForgetPassword() {
    var Fmail = document.getElementById("FEmail").value;
    if (Fmail == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
        return false;
    }
    else {
        return true;
    }
}

function validatePassword() {
    var password = document.getElementById("fpass").value;
    var cpassword = document.getElementById("fcpass").value;

    if (password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
        return false;
    }

    else if (password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
        return false;
    }
    else if (password != cpassword) {
		document.getElementById("errorMsg").innerHTML = "Your password doesn't match"
		return false;
	}
    else {
        alert("Password Reset Successfully!");
        return true;
    }
}
