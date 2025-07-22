const page = document.querySelector(".post");
const content = document.querySelector(".book-page-html");

function scale(page, content) {
    const pageWidth = page.clientWidth;
    const contentWidth = content.scrollWidth;
    const scale = Math.min(1, pageWidth / contentWidth);
    content.style.transform = `scale(${scale})`;
}

scale(page, content);

window.addEventListener("resize", () => scale(page, content));