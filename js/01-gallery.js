import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('.gallery');
createMarkup();

function createMarkup() {
  const markup = galleryItems
    .map(
      item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
    )
    .join('');
  ulEl.innerHTML = markup;
}

ulEl.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  const srcImage = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${srcImage}" width="800" height="600">
`);

  instance.show();
}
