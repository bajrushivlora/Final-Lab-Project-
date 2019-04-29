document.getElementById("weeknd_album").addEventListener("mouseover", playSong);
document.getElementById("weeknd_album").addEventListener("mouseout", stopSong);

function playSong() {
    document.getElementById("weeknd").play();
    console.log(play);
}

function stopSong() {
    document.getElementById("weeknd").load();
}



document.getElementById("pnd2_album").addEventListener("mouseover", playSong);
document.getElementById("pnd2_album").addEventListener("mouseout", stopSong);

function playSong() {
    document.getElementById("pnd2").play();
}

function stopSong() {
    document.getElementById("pnd2").load();
}

