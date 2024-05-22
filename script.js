const body = document.getElementById('body');
const logo = document.getElementById('logo');
const menuIcon = document.getElementById('menuIcon');
const svgFill = document.querySelectorAll('.svg-fill');
const darkToggle = document.getElementById('darkToggle');
const darkLabel = document.getElementById('darkLabel');

function ToggleDarkMode() {
    if (!body.classList.contains('dark')) {
        logo.setAttribute('src', "/images/logos/darklogo.svg");
        menuIcon.setAttribute('src', '/images/icons/menu-icon-dark.svg');
        darkLabel.innerHTML = "DARK";
        for (const obj of svgFill) {
            obj.setAttribute('fill', '#F99E3C');
        }

        body.classList.add('dark');
    } else {
        logo.setAttribute('src', "/images/logos/lightlogo.svg");
        menuIcon.setAttribute('src', '/images/icons/menu-icon-light.svg');
        darkLabel.innerHTML = "LIGHT";
        for (const obj of svgFill) {
            obj.setAttribute('fill', '#A1061D');
        }
        body.classList.remove('dark');
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}