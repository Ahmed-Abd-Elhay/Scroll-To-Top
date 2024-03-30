let toTopButton = document.querySelector(".up");


window.onscroll = function () {
    if (this.scrollY >= 800) {
        toTopButton.classList.add("show");
    } else {
        toTopButton.classList.remove("show");
    }
}

toTopButton.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

};