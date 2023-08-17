import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line


const galleryList = document.querySelector(".gallery")

const renderList = (arr) => arr.map(({ original, preview, description }) =>
 `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`).join("");


galleryList.insertAdjacentHTML("beforeend", renderList(galleryItems));

// galleryList.addEventListener('click', )