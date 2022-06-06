'use strict';

import img1 from "../src/assets/images/1.jpg";
import img2 from "../src/assets/images/2.jpg";
import img3 from "../src/assets/images/3.jpg";
import img4 from "../src/assets/images/4.gif";

const media = [
    {id: 1, title: 'Мельница', image: `${img1}`},
    {id: 2, title: 'Горы', image: `${img2}`},
    {id: 3, title: 'Канал', image: `${img3}`},
    {id: 4, title: 'Котэ', image: `${img4}`}
];

const renderMedia = (title, image) => {
    return `<div class="block">                
                    <img src="${image}" alt="${title}">                                
                    <h3>${title}</h3>
            </div>`;
};

const renderPage = (list) => {
    const renderMap = list.map(object => renderMedia(object.title, object.image)).join("");
    document.querySelector('.gallery__section').insertAdjacentHTML('beforeend', renderMap);
};

renderPage(media);
