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