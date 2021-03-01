const array = ["Paris", "Lyon", "Montreal", "Bordeaux"];
const array1 = ["Paris", 33, ["Montreal", "Bordeaux"], true];

for (i = 0; i < array.length; i++) {
    console.log(typeof array1[i]);
}

const numbers = [21, 45, 1, 2, 54, 32];
console.log(numbers.sort());

//*************************************
// INjecter une vidéo youTube dans un input
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
    changeLink(e.target.value);

    if (link) {
        video.innerHTML =
            `<iframe width='1639' height='932' src=${link} frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`;
    }
});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace ("watch?v=" , "embed/");
    link = embed.split("&")[0];
    console.log(link);
}

// https://www.youtube.com/embed/QB1DTl7HFnc