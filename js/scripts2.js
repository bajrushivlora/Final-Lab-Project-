document.getElementById("modal-button").addEventListener("click", modalOpenFunction);

function modalOpenFunction() {
    var modal = document.getElementById("modal");
    modal.classList.add("modal--open");
}

document.getElementById("modal-close").addEventListener("click", modalCloseFunction);

function modalCloseFunction() {
    var modal = document.getElementById("modal");
    modal.classList.remove("modal--open");
}


document.getElementById("astroworld_album").addEventListener("mouseover", astroworldSong);
document.getElementById("astroworld_album").addEventListener("mouseout", stopAstroworldSong);

function astroworldSong() {
    document.getElementById("wakeup").play();
}

function stopAstroworldSong() {
    document.getElementById("wakeup").load();
}



document.getElementById("championships_album").addEventListener("mouseover", goingbadSong);
document.getElementById("championships_album").addEventListener("mouseout", stopGoingbadSong);

function goingbadSong() {
    document.getElementById("goingbad").play();
}

function stopGoingbadSong() {
    document.getElementById("goingbad").load();
}


document.getElementById("bipolar_album").addEventListener("mouseover", bipolarSong);
document.getElementById("bipolar_album").addEventListener("mouseout", stopBipolarSong);

function bipolarSong() {
    document.getElementById("yikes").play();
}

function stopBipolarSong() {
    document.getElementById("yikes").load();
}


document.getElementById("thankmelater_album").addEventListener("mouseover", drakeSong);
document.getElementById("thankmelater_album").addEventListener("mouseout", stopDrakeSong);

function drakeSong() {
    document.getElementById("missme").play();
}

function stopDrakeSong() {
    document.getElementById("missme").load();
}



document.getElementById("privacy_album").addEventListener("mouseover", cardiSong);
document.getElementById("privacy_album").addEventListener("mouseout", stopCardiSong);

function cardiSong() {
    document.getElementById("moneybag").play();
}

function stopCardiSong() {
    document.getElementById("moneybag").load();
}



document.getElementById("pinkprint_album").addEventListener("mouseover", nickiSong);
document.getElementById("pinkprint_album").addEventListener("mouseout", stopNickiSong);

function nickiSong() {
    document.getElementById("chunli").play();
}

function stopNickiSong() {
    document.getElementById("chunli").load();
}



document.getElementById("pardison_album").addEventListener("mouseover", backitupSong);
document.getElementById("pardison_album").addEventListener("mouseout", stopBackitupSong);

function backitupSong() {
    document.getElementById("backitup").play();
}

function stopBackitupSong() {
    document.getElementById("backitup").load();
}



document.getElementById("postmalone_album").addEventListener("mouseover", betterSong);
document.getElementById("postmalone_album").addEventListener("mouseout", stopBetterSong);

function betterSong() {
    document.getElementById("betternow").play();
}

function stopBetterSong() {
    document.getElementById("betternow").load();
}