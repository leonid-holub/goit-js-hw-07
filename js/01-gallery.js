import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const fatherOfGallery = document.querySelector("div.gallery");
console.log(fatherOfGallery);
const listOfGalleryItems = () => {
	galleryItems.map(item => {
		item = `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" /></></>`;
		fatherOfGallery.insertAdjacentHTML("beforeend", item);
	});
};

listOfGalleryItems();
console.log(fatherOfGallery);

const visible = basicLightbox.visible();

const handleClick = event => {
	if (event.target.nodeName !== "IMG") {
		return;
	}
	event.preventDefault();
	let bigPictureUrl = event.target.dataset.source;
	console.log(bigPictureUrl);
	let pictureInsideModal = `<img width="1280" height="100%" src="${bigPictureUrl}">`;
	let modalWindow = basicLightbox.create(pictureInsideModal);
	modalWindow.show();
	document.addEventListener("keyup", closedModalWindowWithEscape);
	function closedModalWindowWithEscape({ type, key, code }) {
		if (code === "Escape" && modalWindow.visible() === true) {
			console.log(code);
			modalWindow.close();
		}
	}
};

fatherOfGallery.addEventListener("click", handleClick);
