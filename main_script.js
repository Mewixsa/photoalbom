all = document.getElementById("all");
zima = document.getElementById("zima");
vesna = document.getElementById("vesna");
leto = document.getElementById("leto");
osen = document.getElementById("osen");
arhete = document.getElementById("arht");

function aall() {
    all.classList.add("now")
    zima.classList.remove("now");
    vesna.classList.remove("now");
    leto.classList.remove("now");
    osen.classList.remove("now");
    arhete.classList.remove("now")
    filterImages('all')
}

function zzima() {
    zima.classList.add("now")
    filterImages('zima')
    all.classList.remove("now");
    vesna.classList.remove("now");
    leto.classList.remove("now");
    osen.classList.remove("now");
    arhete.classList.remove("now")

}

function vvesna() {
    vesna.classList.add("now")
    filterImages('vesna')
    zima.classList.remove("now");
    arhete.classList.remove("now")
    all.classList.remove("now");
    leto.classList.remove("now");
    osen.classList.remove("now");
}

function lleto() {
    leto.classList.add("now")
    zima.classList.remove("now");
    vesna.classList.remove("now");
    all.classList.remove("now");
    arhete.classList.remove("now")
    osen.classList.remove("now");
    filterImages('leto')
}

function oosen() {
    osen.classList.add("now")
    filterImages('osen')
    zima.classList.remove("now");
    vesna.classList.remove("now");
    arhete.classList.remove("now")
    leto.classList.remove("now");
    all.classList.remove("now");
}

function arhetec() {
    arhete.classList.add("now")
    filterImages('arht')
    osen.classList.remove("now")
    zima.classList.remove("now");
    vesna.classList.remove("now");
    leto.classList.remove("now");
    all.classList.remove("now");
}


 var images = document.querySelectorAll('.photo');
 images.forEach(function(image) {
     var link = document.createElement('a');
     link.setAttribute('href', image.src);
     link.setAttribute('download', '');
     link.appendChild(image.cloneNode(true));
     image.parentNode.replaceChild(link, image);
 });



 function filterImages(season) {
    var images = document.querySelectorAll('.photo');

    images.forEach(function(image) {
        if (season === 'all' || image.classList.contains(season)) {
            image.style.display = 'block'; 
        } else {
            image.style.display = 'none'; 
        }
    });
}


