console.log("cześć");
let przycisk = document.querySelector(".button")
let naglowek = document.querySelector(".h1")
console.log(przycisk);
console.log(naglowek);
przycisk.addEventListener("click", () => {
    naglowek.remove();
});


console.log("Cześć2!");

let button = document.querySelector(".footer__button");
console.log(button);
let body = document.querySelector(".body");
console.log(body);
let footer__span = document.querySelector(".footer__span")

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    footer__span.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

