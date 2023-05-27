// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;



    }
}


// var eyeLeft = document.getElementById("eye-left");
// var eyeRight = document.getElementById("eye-right");
//
// document.addEventListener("mousemove", function(event) {
//
//
//
//     var eyeLeftRect = eyeLeft.getBoundingClientRect();
//     var eyeRightRect = eyeRight.getBoundingClientRect();
//
//     var cursorX = event.clientX;
//     var cursorY = event.clientY;
//
//     var pupilLeftX = (cursorX - eyeLeftRect.left - (eyeLeftRect.width / 2)) * 0.1;
//     var pupilLeftY = (cursorY - eyeLeftRect.top - (eyeLeftRect.height / 2)) * 0.1;
//     eyeLeft.style.transform = "translate(" + pupilLeftX + "px, " + pupilLeftY + "px)";
//
//     var pupilRightX = (cursorX - eyeRightRect.left - (eyeRightRect.width / 2)) * 0.1;
//     var pupilRightY = (cursorY - eyeRightRect.top - (eyeRightRect.height / 2)) * 0.1;
//     eyeRight.style.transform = "translate(" + pupilRightX + "px, " + pupilRightY + "px)";
// });


var eyeLeft = document.getElementById("eye-left");
var eyeRight = document.getElementById("eye-right");

document.addEventListener("mousemove", function(event) {
    var eyeLeftRect = eyeLeft.getBoundingClientRect();
    var eyeRightRect = eyeRight.getBoundingClientRect();

    var cursorX = event.clientX;
    var cursorY = event.clientY;

    var pupilLeftX = (cursorX - eyeLeftRect.left - (eyeLeftRect.width / 2)) * 0.1;
    var pupilLeftY = (cursorY - eyeLeftRect.top - (eyeLeftRect.height / 2)) * 0.1;

    var pupilRightX = (cursorX - eyeRightRect.left - (eyeRightRect.width / 2)) * 0.1;
    var pupilRightY = (cursorY - eyeRightRect.top - (eyeRightRect.height / 2)) * 0.1;

    var maxDist = 18; // maximum distance the pupils can move from the center of the eyes
    var distLeft = Math.sqrt(Math.pow(pupilLeftX, 2) + Math.pow(pupilLeftY, 2)); // calculate distance from center of left eye
    var distRight = Math.sqrt(Math.pow(pupilRightX, 2) + Math.pow(pupilRightY, 2)); // calculate distance from center of right eye

    if (distLeft > maxDist) {
        pupilLeftX *= maxDist / distLeft;
        pupilLeftY *= maxDist / distLeft;
    }

    if (distRight > maxDist) {
        pupilRightX *= maxDist / distRight;
        pupilRightY *= maxDist / distRight;
    }

    eyeLeft.style.transform = "translate(" + pupilLeftX + "px, " + pupilLeftY + "px)";
    eyeRight.style.transform = "translate(" + pupilRightX + "px, " + pupilRightY + "px)";
});

