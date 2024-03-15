const txt = document.querySelector('#txt')

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

function startTime() {
    let heute = new Date()
    console.log(heute)
    let day = wochenTag[heute.getDay()]
    let std = heute.getHours()
    let min = heute.getMinutes()
    let sec = heute.getSeconds()
    console.log(heute)

    let time
    if (std <= 12) {
        time = "AM"
    } else {
        time = "PM"
    }
    // `${day} ${std}:${min}:${sec} ${time}`

    txt.innerHTML = heute.toLocaleTimeString("en-US")
}
setInterval(startTime, 1000);





