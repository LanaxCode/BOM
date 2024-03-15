// console.log("Start Warten für 3 Sekunden...")

// function sayHello() {
//     console.log("Erledigt, du hast 3 verschwendet")
// }
// function startInThreeSeconds() {
//     setTimeout(sayHello, 3000)
// }
// startInThreeSeconds()


let zahl = 10;

function sekunden() {

    if (zahl >= 0) {
        console.log(zahl);
        zahl = zahl - 1;
    }
    else {
        console.log("Ende");
        window.clearInterval(zeit);
    }

}

let zeit = setInterval(sekunden, 500);

