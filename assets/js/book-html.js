// keys for local storage
const SCROLL_POS = 'book_scroll_pos';

const page = document.querySelector(".post");
const content = document.querySelector(".book-page-html");

const scale = (page, content) => {
    content.style.transform = `scale(${Math.min(1, page.clientWidth / content.scrollWidth)})`;
}
scale(page, content);
// eliminates initial resize flashes
content.style.visibility = "visible";
window.addEventListener("resize", () => scale(page, content));

/** Gets the current book from the given URL */
function getBook(href) {
  const parts = href.split('/');
  // ignore trailing slash, defined by last page being empty or just an anchor
  let index = parts.length - 1;
  let page = parts[index];
  if (page.length == 0 || page.startsWith('#')) {
    index -= 1;
    page = parts[index];
  }
  // if the last element is gallery, we are leaving the book, so just say no book
  if (page.startsWith("gallery")) {
    return ""
  }
  // if the last element is a page, our book is the previous element
  if (page.startsWith("page")) {
    return parts[index - 1];
  }
  // not a page? means we are on the cover, book is current element
  return page;
}

// keep scroll position when navigating between book pages
document.addEventListener("DOMContentLoaded", function(event) {
  const scrollPos = sessionStorage.getItem(SCROLL_POS);
  if (scrollPos) {
    // delay to ensure we override the anchor scroll
    setTimeout(() => {
      window.scrollTo({ top: scrollPos, left: 0, behavior: "instant" });
    }, 0);
    sessionStorage.removeItem(SCROLL_POS);
  }
});
// on unload, store the scroll position and book
window.onbeforeunload = function(e) {
  // if using a link to navigate to another page of the same book, store the scroll position
  const target = document.activeElement.href;
  if (target && getBook(target) === getBook(window.location.href)) {
    sessionStorage.setItem(SCROLL_POS, window.scrollY);
  }
};


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
        const subpage = parts[parts.length - 2];
        let image;
        if (subpage.startsWith("page")) {
            image = subpage.replace("page-", "clean_");
        } else {
            // if no page, we are linking the cover
            image = "cover";
        }

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