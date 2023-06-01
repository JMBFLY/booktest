var right = document.getElementsByClassName("right");
var container = document.querySelector(".container");
var pages = document.querySelectorAll(".page");

var polaroid = document.querySelectorAll(".polaroid");
var photos = document.querySelectorAll(".photo");



for (var i = 0; i < pages.length; i++) {
    pages[i].style.width = '10%';
    pages[i].style.maxWidth = '45px';
    pages[i].style.height = '10%';
    pages[i].style.maxHeight = '45px';
}

for (var i = 0; i < photos.length; i++) {
    polaroid[i].style.width = '90%';
    polaroid[i].style.height = '75%';
}

// var startX = 0;
// var endX = 0;
// var drag = false;
// var delay = 100;
// var moveX = 0;


// document.addEventListener('mousedown', (el) => {
//     drag = false;
//     startX = el.clientX;
// });

// document.addEventListener('mousemove', (el) => {
//     endX = el.clientX;
//     moveX = endX - startX;
// });

document.addEventListener('mouseup', (el) => {
    // endX = el.clientX;
    el.preventDefault();
    // console.log(Math.abs(moveX), document.documentElement.clientWidth)
    // console.log(el.target.attributes[0].value)

    // if (Math.abs(moveX) >= delay && moveX >= 0) {
    if (el.target.attributes[0].value == 'back') {
        turnLeft();
        // photoMove();
    }
    // else if (Math.abs(moveX) >= delay && moveX < 0) {
    else if (el.target.attributes[0].value == 'front') {
        turnRight();
    }
});

function mousecheck() {

}

var si = right.length;
var z = 1;
function turnRight() {
    if (si > 0) {
        if (si == 8) {
            container.style.left = '50%';
            console.log(container.style.left);
        }
        else if (si == 1) {
            container.style.left = '70%';
            console.log(container.style.left);
        }
        si--;
        right[si].classList.add("flip");
        right[si].style.zIndex = z;
        z++;
    }

}
function turnLeft() {
    if (si < right.length) {
        si++;
        if (si == 8) {
            container.style.left = '30%';
            console.log(container.style.left);
        }
        else if (si == 1) {
            container.style.left = '50%';
            console.log(container.style.left);
        }
        right[si - 1].className = "right";
        setTimeout(change, 350);
        z--;
    }
}

function change() {
    if (si - 2 >= 0 && right[si - 1].style.zIndex != "auto") {
        right[si - 2].style.zIndex = "auto";
    }
    right[si - 1].style.zIndex = "auto";
}

// var rotate = [
//     [-10, 7, -5, 3, 0], //좌상
//     [], //우상
//     [], //좌하
//     []  //우하
// ]

// var move = [
//     [10, 5, 3, 1, 0], //좌상
//     [], //우상
//     [], //좌하
//     []  //우하
// ]
// var inin;
// var r = 0;
// var m = 0;
// function photoMove() {
//     inin = setInterval(polarmove, 1000);
// }

// function polarmove() {
//     if (m > 4) {
//         clearInterval(inin);
//         return
//     }
//     polaroid[0].style.transform = `rotate(${rotate[0][r]}deg)`
//     polaroid[0].style.top = `${move[0][m][0]}`;
//     polaroid[0].style.left = `${move[0][m][1]}`;
//     console.log(m, polaroid[0].style.transform);
//     r += 1
//     m += 1
// }