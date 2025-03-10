const page = window.location.pathname;
const header = document.querySelector('#visu');

const btn = document.querySelector('#botao');

btn.addEventListener("click", function(event) {
    event.preventDefault();
    const form = document.querySelector('#myform');
    const gols = document.querySelector('#gols').value;
    localStorage.setItem("NGols", gols);
    window.location.href = ('index.html');
});
const visuGols = localStorage.getItem("NGols");
header.innerHTML = "Gols: " + visuGols + "<br>" + "Caça Rato fez " + visuGols + " gols ontem";
document.querySelector('#')