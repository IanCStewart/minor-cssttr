var loginItem = document.querySelector('a[href="#login"]');
var menuCheckbox = document.querySelector('input#hamburger-menu');
var loginSubmit = document.querySelector('form[name=login] button[type=submit]');
var loginClose = document.querySelector('form[name=login] button[name=close-login]');

function handleLoginItemClick() {
  menuCheckbox.checked = false;
}

function handleClose(event) {
  event.preventDefault();
  window.location.hash = '';
}

loginItem.addEventListener('click', handleLoginItemClick, false);
loginSubmit.addEventListener('click', handleClose, false);
loginClose.addEventListener('click', handleClose, false);
