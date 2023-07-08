import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
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
  const largeImage = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${largeImage}" width="800" height="600">
  `,
    {
      onShow: handleModalShow,
      onClose: handleModalClose,
    }
  );

  instance.show();
  currentInstance = instance;
}

function handleModalShow(instance) {
  document.addEventListener("keydown", handleKeyPress);
}

function handleModalClose(instance) {
  document.removeEventListener("keydown", handleKeyPress);
}

function handleKeyPress(event) {
  if (event.code === "Escape") {
    currentInstance.close();
  }
}
