const page = document.querySelector(".post");
const content = document.querySelector(".book-page-html");

const scale = (page, content) => { content.style.transform = `scale(${Math.min(1, page.clientWidth / content.scrollWidth)})`; }
scale(page, content);
// eliminates resize flashes
content.style.visibility = "visible";
window.addEventListener("resize", () => scale(page, content));

// prefetch HTML and image
const prefetch = anchor => {
    if (!anchor.href) return;
    const listener = () => {
        const link_html = document.createElement('link');
        link_html.href = anchor.href;
        link_html.rel = "prefetch";
        link_html.type = "document";
        document.head.appendChild(link_html);

        const parts = anchor.href.split('/');
        const book = parts[parts.length - 3].replace("-html", "").replace("-", "_");
        const image = parts[parts.length - 2].replace("-", "_").replace("page", "clean");

        const link_img = document.createElement('link');
        link_img.href = `/assets/images/book/tinkers/3.10.2/${book}/${image}.png`;
        link_img.rel = "prefetch";
        link_img.type = "image";
        document.head.appendChild(link_img);

        anchor.removeEventListener("mouseover", listener);
    };
    anchor.addEventListener('mouseover', listener);
};

const navigation = document.querySelector(".navigation");
navigation.querySelectorAll("a").forEach(prefetch);
content.querySelectorAll("a").forEach(prefetch);
