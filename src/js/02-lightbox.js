import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
let currentInstance = null;
const markup = galleryItems
  .map(
    (galleryItem) => `<li class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
    title="${galleryItem.description}"
  />
</a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  
}

const lightbox = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionDelay: 250,
  });