document.getElementById("weeknd_album").addEventListener("mouseover", weekndSong);
document.getElementById("weeknd_album").addEventListener("mouseout", stopWeekndSong);

function weekndSong() {
    document.getElementById("weeknd").play();
}

function stopWeekndSong() {
    document.getElementById("weeknd").load();
}


    document.getElementById("pnd2_album").addEventListener("mouseover", PND2Song);
    document.getElementById("pnd2_album").addEventListener("mouseout", stopPND2Song);

    function PND2Song() {
        document.getElementById("pnd2").play();
    }

    function stopPND2Song() {
        document.getElementById("pnd2").load();
    }


document.getElementById("jhene_album").addEventListener("mouseover", jheneSong);
document.getElementById("jhene_album").addEventListener("mouseout", stopJheneSong);

function jheneSong() {
    document.getElementById("jhene").play();
}

function stopJheneSong() {
    document.getElementById("jhene").load();
}


    document.getElementById("frankocean_album").addEventListener("mouseover", oceanSong);
    document.getElementById("frankocean_album").addEventListener("mouseout", stopOceanSong);

    function oceanSong() {
        document.getElementById("frankocean").play();
    }

    function stopOceanSong() {
        document.getElementById("frankocean").load();
    }


document.getElementById("kendrick_album").addEventListener("mouseover", kendrickSong);
document.getElementById("kendrick_album").addEventListener("mouseout", stopKendrickSong);

function kendrickSong() {
    document.getElementById("kendrick").play();
}

function stopKendrickSong() {
    document.getElementById("kendrick").load();
}


    document.getElementById("pnd_album").addEventListener("mouseover", pndSong);
    document.getElementById("pnd_album").addEventListener("mouseout", stopPNDSong);

    function pndSong() {
        document.getElementById("pnd").play();
    }

    function stopPNDSong() {
        document.getElementById("pnd").load();
    }