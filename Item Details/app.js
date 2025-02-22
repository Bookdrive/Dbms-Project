
const stars = document.querySelectorAll(".star");
let currRating = 0;
console.log(stars);

for (let iter = 0; iter < stars.length; iter++) {
    stars[iter].starNumber = iter + 1;

    ["mouseover", "mouseout", "click"].forEach(function (e) {
        stars[iter].addEventListener(e, showRatings);
    })
}

function showRatings(e) {
    let type = e.type;
    let starNumber = this.starNumber;
    stars.forEach((elem, index) => {
        if (type === "click") {
            currRating = starNumber;
            initializeStar(currRating);
        }
        if (type === "mouseover") {
            if (index < starNumber) {
                elem.classList.add("text-yellow-300");
            }
            else {
                elem.classList.remove("text-yellow-300");
            }
        }
        if (type === "mouseout") {
            elem.classList.remove("text-yellow-300");
        }

    })
}

function initializeStar(currStar) {
    for (let star = 0; star < 5; star++) {
        if (currStar > star) {
            stars[star].classList.add("text-yellow-400");
        }
        else {
            stars[star].classList.remove("text-yellow-400");
        }
    }
}





const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const menuLines = document.querySelectorAll(".line");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuLines[0].classList.toggle("rotate-45");
    menuLines[1].classList.toggle("opacity-0");
    menuLines[2].classList.toggle("-rotate-45");
});