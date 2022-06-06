'use strict';

const dateCalApplicationBtn = document.querySelector('.dateCalApplication'),
      timerApplication = document.querySelector('.timerApplication'),
      datecalc = document.getElementById('datecalc'),
      promotion__timer = document.querySelector('.promotion__timer');

dateCalApplicationBtn.addEventListener('click', () => {
    datecalc.classList.toggle('hidden');
});

timerApplication.addEventListener('click', () => {
    promotion__timer.classList.toggle('hidden');
});
