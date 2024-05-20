const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  menu.classList.toggle('close');
}); 

const LogButton = document.getElementById('LogButton');
const LogPage = document.getElementById('LogPage');

LogButton.addEventListener('click', () => {
  LogPage.classList.toggle('open');
  LogPage.classList.toggle('close');
});