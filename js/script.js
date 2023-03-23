
{
    const welcome = () => {
        console.log("Witam wszystkich developerów");
    };

    const removeHeader = () => {
        const button = document.querySelector(".js-button");
        const header = document.querySelector(".js-header");
        
        button.addEventListener("click", header.remove, button.remove);
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const nextColorName = document.querySelector(".js-nextColorname");

        body.classList.toggle("body--grey");
        nextColorName.innerText = body.className.match("body--grey") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

        changeBackgroundButton.addEventListener("click", toggleBackground);
    };

    removeHeader();
    welcome();
    init();
}