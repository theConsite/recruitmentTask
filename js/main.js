shadowBoxes = document.getElementsByClassName('shadowBox');
navlist = document.getElementsByClassName('nav__list__elem__link');
checkCurrentSection();
window.onscroll = function () {
    checkCurrentSection();
};

function checkCurrentSection() {
    teamTop = document.getElementById('team').offsetTop - 70;
    contactTop = document.getElementById('contact').offsetTop - 70;
    for (i = 0; i < 3; i++) {
        navlist[i].classList.remove('current');
    };
    if (window.scrollY < teamTop) {
        navlist[0].classList.add('current');
    } else if (window.scrollY >= teamTop && window.scrollY < contactTop) {
        navlist[1].classList.add('current');
    } else if (window.scrollY >= contactTop) {
        navlist[2].classList.add('current');
    };
};

function shadowbox_open(name) {
    document.getElementsByTagName('body')[0].classList.add('noscroll');
    if (name == "Edgar") {
        shadowBoxes[0].style.display = "block";
    } else if (name == "Mae") {
        shadowBoxes[1].style.display = "block";
    } else if (name == "David") {
        shadowBoxes[2].style.display = "block";
    } else if (name == "Frederick") {
        shadowBoxes[3].style.display = "block";
    };
};

function shadowbox_close() {
    document.getElementsByTagName('body')[0].classList.remove('noscroll');
    for (i = 0; i < 4; i++) {
        shadowBoxes[i].style.display = "none";
    };
};

function header_scroll() {
    window.scrollTo(0, window.innerHeight);
};