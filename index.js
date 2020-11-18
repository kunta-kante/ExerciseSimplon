// on call the scroollreveal //

ScrollReveal().reveal('.card', { delay: 500 });
ScrollReveal().reveal('h1', { delay: 500 });

// we call the modal //
// we call the time //
const modal = document.querySelector('.modal');
const button = document.querySelector('.closeModal');
const time3 = document.querySelector('.date-3');
const time2 = document.querySelector('.date-2');
const time1 = document.querySelector('.date-1');
// my function for modal //
function closeModal() {
    modal.style.display = 'none';
}

function displayModal() {
    modal.style.display = 'block';
}


// on recupere le function pour le date //
window.onload = function() {
        setTimeout(displayModal, 3000);
    }
    // on appelle le button pour le modal //
button.addEventListener('click', closeModal);
const utcDate = new Date(Date.now());
console.log(utcDate);
const time3Value = document.createTextNode(utcDate);
const time2Value = document.createTextNode(utcDate);
const time1Value = document.createTextNode(utcDate);
time3.appendChild(time3Value);
time2.appendChild(time2Value);
time1.appendChild(time1Value);