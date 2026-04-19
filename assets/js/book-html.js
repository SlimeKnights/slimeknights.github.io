const page = document.querySelector(".post");
const content = document.querySelector(".book-page-html");

const scale = (page, content) => {
    content.style.transform = `scale(${Math.min(1, page.clientWidth / content.scrollWidth)})`;
}
scale(page, content);
// eliminates initial resize flashes
content.style.visibility = "visible";
window.addEventListener("resize", () => scale(page, content));

// fetch current image path
const img_link = content.querySelector("img").src;
// trim to root for this book
const path_prefix = img_link.substring(0, img_link.lastIndexOf('/'));

/* prefetch HTML and img for links hovered */
const prefetch = anchor => {
    if (!anchor.href) return;
    const listener = () => {
        const link_html = document.createElement('link');
        link_html.href = anchor.href;
        link_html.rel = "prefetch";
        link_html.type = "document";
        document.head.appendChild(link_html);

        const parts = anchor.href.split('/');
        // figure out target page number
        const subpage = parts[parts.length - 2]
        let image;
        if (subpage.includes("page")) {
            image = subpage.replace("page-", "clean_");
        } else {
            // if no page, we are linking the cover
            image = "cover";
        }
        console.log(parts)
        console.log(image)

        const link_img = document.createElement('link');
        link_img.href = `${path_prefix}/${image}.png`;
        link_img.rel = "prefetch";
        link_img.type = "image";
        document.head.appendChild(link_img);

        anchor.removeEventListener("mouseover", listener);
    };
    anchor.addEventListener('mouseover', listener);
};

content.querySelectorAll("a").forEach(prefetch);