document.getElementById("weeknd_album").addEventListener("mouseover", weekndSong);
document.getElementById("weeknd_album").addEventListener("mouseout", stopWeekndSong);

function weekndSong() {
    document.getElementById("weeknd").play();
}

function stopWeekndSong() {
    document.getElementById("weeknd").load();
}


document.getElementById("pnd2_album").addEventListener("mouseover", PNDSong);
document.getElementById("pnd2_album").addEventListener("mouseout", stopPNDSong);

function PNDSong() {
    document.getElementById("pnd2").play();
}

function stopPNDSong() {
    document.getElementById("pnd2").load();
}

