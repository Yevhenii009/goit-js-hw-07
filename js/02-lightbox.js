import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryContainer = document.querySelector('.gallery');

const createGalleryItemsMarkup =
    galleryItems.map(({ preview, original, description }) => 
    `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>
    `
    ).join('');

galeryContainer.insertAdjacentHTML('beforeend', createGalleryItemsMarkup);
    
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});
       


































console.log(galleryItems);