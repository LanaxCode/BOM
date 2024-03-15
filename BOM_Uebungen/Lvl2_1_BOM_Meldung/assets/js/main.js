let counter = document.querySelector('#count')
const circle = document.querySelector('.message')

zahl = 10

function timer() {
    if (zahl >= 0) {
        counter.innerHTML = zahl;
        zahl--;
    }
    else {

        window.clearInterval(zeit);
        circle.style.display = "none"
    }

}
let zeit = setInterval(timer, 500);