console.log("hello world!");

var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

// Open/Close Settings Menu Start
function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}
// Open/Close Settings Menu End

// Local Storage of dark/light mode settings Start 
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}
// Local Storage of dark/light mode settings End
