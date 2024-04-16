import Notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(form.elements['delay'].value);
    const step = parseInt(form.elements['step'].value);
    const amount = parseInt(form.elements['amount'].value);

    createPromises(amount, delay, step);
  });
});

function createPromises(amount, initialDelay, step) {
  let delay = initialDelay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
