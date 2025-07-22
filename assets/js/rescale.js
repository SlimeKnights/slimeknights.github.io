const page = document.querySelector(".post");
const content = document.querySelector(".book-page-html");

function scale(page, content) {
    content.style.transform = `scale(${Math.min(1, page.clientWidth / content.scrollWidth)})`;
}

scale(page, content);

window.addEventListener("resize", () => scale(page, content));