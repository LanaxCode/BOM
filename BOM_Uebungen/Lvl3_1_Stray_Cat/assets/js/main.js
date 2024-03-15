
const cat = document.querySelector('#cat')


let catInterval;
let count = 0;
let leftPosition = 0;
let rightPosition = 0;


const catWalk = () => {
    let animationCat = () => {
        leftPosition += 10;
        cat.style.left = leftPosition + "px";
    }
    catInterval = setInterval(animationCat, 100)
}


function pause() {
    clearInterval(catInterval);
    // train.style.left = 0;
}

// function turn() {
//     let animationCat = () => {
//         console.log()
//         rightPosition += 10;
//         cat.style.right = rightPosition + "px";
//         cat.style.transform = "scaleX(-1)"
//     }
//     catInterval = setInterval(animationCat, 100)
// }

function turn() {
    cat.style.transform = "scaleX(-1)"

}