const button = document.querySelector('#btn')
let zeit = document.querySelector('.zeit')


let zahl = 100;
let count = 0

function pageLoad() {
    button.onclick = alertMe();
}

function alertMe() {
    if (count < 1) {
        setInterval(function () {
            if (zahl >= 0) {
                console.log(zahl);
                zahl = zahl--;
                zeit.innerHTML = zahl-- + "%"
            }
        }, 200);
    }
    count++
}
