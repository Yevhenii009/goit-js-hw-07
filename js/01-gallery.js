import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryContainer = document.querySelector('.gallery');
galeryContainer.addEventListener('click', onGaleryClick);

const createGalleryItemsMarkup =
    galleryItems.map(({ preview, original, description }) => 
    `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a></div>
    `
    ).join('');

galeryContainer.insertAdjacentHTML('beforeend', createGalleryItemsMarkup);
    
function onGaleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    } else {
        const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`);
    
        instance.show();
    }
};










// {
        //     onShow: () => {
        //         document.addEventListener("click", onGaleryClick);
        //     },
            // onClose: () => {
            //     document.removeEventListener("click", onGaleryClick);
            // },