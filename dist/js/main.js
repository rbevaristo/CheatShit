let sideMenuToggler = document.getElementById('sideMenu--toggler');

sideMenuToggler.addEventListener('click', toggleSideMenu);

function toggleSideMenu() {
    let aside = document.getElementById('sideMenu');
    (aside.classList.contains('isOpen')) ?
    aside.classList.remove('isOpen'):
        aside.classList.add('isOpen');
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('realTime').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

startTime();

let borderCards = () => {
    let borders = document.getElementsByClassName('border-color-top');
    for (var i = 0; i < borders.length; i++) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        // if ((i % 2) != 0)
        borders[i].style.borderTop = `5px solid rgb(${r},${g},${b})`;
    }
}

borderCards();