import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', function () {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];

      if (selectedDate < new Date()) {
        Notiflix.Notify.warning('Please choose a date in the future');
        document.querySelector('.button-start').disabled = true;
      } else {
        document.querySelector('.button-start').disabled = false;
      }
    },
  };

  const datePicker = flatpickr('#datetime-picker', options);

  const startButton = document.querySelector('.button-start');
  startButton.addEventListener('click', function () {
    const selectedDate = datePicker.selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      Notiflix.Notify.failure('Please choose a date and time in the future');
      return;
    }

    startCountdown(selectedDate);
  });

  function startCountdown(targetDate) {
    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        updateInterface(0, 0, 0, 0);
        Notiflix.Notify.success('Countdown finished');
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(distance);

      updateInterface(
        addLeadingZero(days),
        addLeadingZero(hours),
        addLeadingZero(minutes),
        addLeadingZero(seconds)
      );
    }
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  function updateInterface(days, hours, minutes, seconds) {
    document.querySelector('[data-days]').textContent = days;
    document.querySelector('[data-hours]').textContent = hours;
    document.querySelector('[data-minutes]').textContent = minutes;
    document.querySelector('[data-seconds]').textContent = seconds;
  }

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
});
