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








document.getElementById("weeknd_album").addEventListener("mouseover", weekndSong);
document.getElementById("weeknd_album").addEventListener("mouseout", stopWeekndSong);


function weekndSong() {
    document.getElementById("weeknd").play();
    document.querySelector('.song1').style.visibility = "visible";
}

function stopWeekndSong() {
    document.getElementById("weeknd").load();
    document.querySelector('.song1').style.visibility = "hidden";
}

// ----------------------------------------------------------------------------------

    document.getElementById("pnd2_album").addEventListener("mouseover", PND2Song);
    document.getElementById("pnd2_album").addEventListener("mouseout", stopPND2Song);

    function PND2Song() {
        document.getElementById("pnd2").play();
        document.querySelector('.song2').style.visibility = "visible";
    }

    function stopPND2Song() {
        document.getElementById("pnd2").load();
        document.querySelector('.song2').style.visibility = "hidden";
    }

// ----------------------------------------------------------------------------------

document.getElementById("jhene_album").addEventListener("mouseover", jheneSong);
document.getElementById("jhene_album").addEventListener("mouseout", stopJheneSong);

function jheneSong() {
    document.getElementById("jhene").play();
    document.querySelector('.song3').style.visibility = "visible";
}

function stopJheneSong() {
    document.getElementById("jhene").load();
    document.querySelector('.song3').style.visibility = "hidden";
}

// ----------------------------------------------------------------------------------

    document.getElementById("frankocean_album").addEventListener("mouseover", oceanSong);
    document.getElementById("frankocean_album").addEventListener("mouseout", stopOceanSong);

    function oceanSong() {
        document.getElementById("frankocean").play();
        document.querySelector('.song4').style.visibility = "visible";
    }

    function stopOceanSong() {
        document.getElementById("frankocean").load();
        document.querySelector('.song4').style.visibility = "hidden";
    }

// ----------------------------------------------------------------------------------

document.getElementById("kendrick_album").addEventListener("mouseover", kendrickSong);
document.getElementById("kendrick_album").addEventListener("mouseout", stopKendrickSong);

function kendrickSong() {
    document.getElementById("kendrick").play();
    document.querySelector('.song5').style.visibility = "visible";
}

function stopKendrickSong() {
    document.getElementById("kendrick").load();
    document.querySelector('.song5').style.visibility = "hidden";
}

// ----------------------------------------------------------------------------------

    document.getElementById("starboy_album").addEventListener("mouseover", starboySong);
    document.getElementById("starboy_album").addEventListener("mouseout", stopStarboySong);

    function starboySong() {
        document.getElementById("starboy").play();
        document.querySelector('.song6').style.visibility = "visible";
    }

    function stopStarboySong() {
        document.getElementById("starboy").load();
        document.querySelector('.song6').style.visibility = "hidden";
    }

// ----------------------------------------------------------------------------------

document.getElementById("sad_album").addEventListener("mouseover", sadSong);
document.getElementById("sad_album").addEventListener("mouseout", stopSadSong);

function sadSong() {
    document.getElementById("sad").play();
    document.querySelector('.song7').style.visibility = "visible";
}

function stopSadSong() {
    document.getElementById("sad").load();
    document.querySelector('.song7').style.visibility = "hidden";
}

  
