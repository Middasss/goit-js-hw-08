import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

const galleryItem = document.querySelector('.gallery');

const galleryConstruct = () => {
  const imgItems = galleryItems
    .map(
      el =>
        `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
    )
    .join('');
  galleryItem.innerHTML = imgItems;
};
galleryConstruct();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,

  showCounter: false,
});

console.log(galleryItems);
