'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button Clicked');
  //removing the hidden class after clicking
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//the show-modal is like an array structure if you look in the console.
//so 'i' will initiate from 0
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//keyboard events
//Here, e stands for event. JavaScript will call this function with the event object as an argument.
document.addEventListener('keydown', function (e) {
  console.log('A key was pressed');
  console.log(e.key);
  /*
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
  */

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
