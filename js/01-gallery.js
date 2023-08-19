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

const handleListClick = (event) => {
      event.preventDefault();
    if (event.currentTarget === event.target) {
    return;
}
    const selectedImage = event.target.getAttribute('data-source')
    
    const modal = basicLightbox.create( `<img src="${selectedImage}"  width="1400" height="900" style = "border: 10px inset #EEE8AA"; />`);
    
    modal.show();
    
    const closeModalImg = (evt) => {
        if (evt.key === 'Escape') {
            modal.close();
            removeKeyListener();
        }
    }

    galleryList.addEventListener('keydown', closeModalImg);
    const removeKeyListener = () => {
        galleryList.removeEventListener('keydown', closeModalImg);
    };
}

galleryList.insertAdjacentHTML("beforeend", renderList(galleryItems));

galleryList.addEventListener('click', handleListClick)

