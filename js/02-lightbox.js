import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const galleryList = document.querySelector(".gallery")

const itemList = (arr) => arr.map(({ preview, original, description }) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
alt="${description}"
/>
</a>
</li>`).join("");

galleryList.insertAdjacentHTML("beforeend", itemList(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.5,
    showCounter: true,
 });