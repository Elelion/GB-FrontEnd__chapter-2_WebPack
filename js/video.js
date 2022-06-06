'use strict';

import video1 from "../src/assets/video/1.mp4";
import video2 from "../src/assets/video/2.mp4";

/**/

const media = [
    {id: 1, title: 'Видосик 1', video: `${video1}`},
    {id: 2, title: 'Видосик 2', video: `${video2}`}
];

const renderAudio = (title, video) => {

    return `<div class="block">                
                    <video src="${video}" controls></video>                              
                    <h3>${title}</h3>
            </div>`;
};

const renderVideoPage = (list) => {
    const renderMap = list.map(object => renderAudio(object.title, object.video)).join("");
    document.querySelector('.gallery__section').insertAdjacentHTML('beforeend', renderMap);
};

renderVideoPage(media);
