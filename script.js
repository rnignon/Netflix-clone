const header = document.querySelector('.header__nav');

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.setAttribute("style", "background: var(--primary); transition: 1s;");
    } else {
        header.setAttribute("style", "background: transparent; transition: 1s;");
    }
});