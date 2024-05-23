const body = document.getElementById('body');
const logo = document.getElementById('logo');
const menuIcon = document.getElementById('menuIcon');
const svgFill = document.querySelectorAll('.svg-fill');
const darkToggle = document.getElementById('darkToggle');
const darkLabel = document.getElementById('darkLabel');
let darkMode = localStorage.getItem("darkMode");

// Enable Dark Mode
const enableDarkMode = () => {
    logo.setAttribute('src', "/images/logos/darklogo.svg");
    menuIcon.setAttribute('src', '/images/icons/menu-icon-dark.svg');
    darkLabel.innerHTML = "DARK";
    for (const obj of svgFill) {
        obj.setAttribute('fill', '#F99E3C');
    }
    body.classList.add('dark');
    window.localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode
const disableDarkMode = () => {
    logo.setAttribute('src', "/images/logos/lightlogo.svg");
    menuIcon.setAttribute('src', '/images/icons/menu-icon-light.svg');
    darkLabel.innerHTML = "LIGHT";
    for (const obj of svgFill) {
        obj.setAttribute('fill', '#A1061D');
    }
    body.classList.remove('dark');
    window.localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
    enableDarkMode();
}

// Desktop Button
function ToggleDarkMode() {
    darkMode = window.localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}