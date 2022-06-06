'use strict';

import audio1 from "../src/assets/audio/1.mp3";
import audio2 from "../src/assets/audio/2.mp3";
import audio3 from "../src/assets/audio/3.mp3";


const media = [
    {id: 1, title: 'Звук 1', audio: `${audio1}`},
    {id: 2, title: 'Звук 2', audio: `${audio2}`},
    {id: 3, title: 'Звук 3', audio: `${audio3}`}
];

const renderAudio = (title, audio) => {

    return `<div class="block">                
                    <audio src="${audio}" controls></audio>                              
                    <h3>${title}</h3>
            </div>`;
};

const renderAudioPage = (list) => {
    const renderMap = list.map(object => renderAudio(object.title, object.audio)).join("");
    document.querySelector('.gallery__section').insertAdjacentHTML('beforeend', renderMap);
};



renderAudioPage(media);
