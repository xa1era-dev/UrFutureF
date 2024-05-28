const button = document.querySelector('.js-formSubmit');

button.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.location = '/public/personal.html';
    console.log('aaaa')
});