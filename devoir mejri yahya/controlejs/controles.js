function affiche(x, y) {
    document.getElementById('code').value = x;
    document.getElementById('nom').value = y;
    document.getElementById('prix').value = y == "bicyclette électrique" ? 30 : y == "trottinette électrique" ? 20 : 50;
}

function calc() {
    let p = document.getElementById('prix').value;
    let d = document.getElementById('duree').value;
    let r = document.getElementById('s1').checked ? 5 : 10;
    document.getElementById('result').textContent = (p * d - r) + " dinars";
}

window.onload = function() {
    let images = document.getElementsByTagName('img');
    for(let img of images) {
        img.onmouseover = function() {
            affiche(this.dataset.code, this.alt);
        }
    }
    document.getElementById('calculer').onclick = calc;
}