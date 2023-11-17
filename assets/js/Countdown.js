(function() {
  "use strict";
  const countdown = document.querySelector('.countdown');
  const output = countdown.innerHTML;

  const countDownDate = function() {
    const targetDate = new Date(countdown.dataset.count);
    const offset = 6e4 * targetDate.getTimezoneOffset();
    const timeleft = targetDate.getTime() - Date.now() + offset;

    const days = ~~(timeleft / 864e5);
    const hours = ~~((timeleft % 864e5) / 36e5);
    const minutes = ~~((timeleft % 36e5) / 6e4);
    const seconds = ~~((timeleft % 6e4) / 1e3);

    countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
  }
  countDownDate();
  setInterval(countDownDate, 1e3);


 const countdown2 = document.querySelector('.countdown2');
  const output2 = countdown2.innerHTML;

  const countDownDate2 = function() {
    const targetDate2 = new Date(countdown2.dataset.count);
    const offset2 = 6e4 * targetDate2.getTimezoneOffset();
    const timeleft2 = targetDate2.getTime() - Date.now() + offset2;

    const days2 = ~~(timeleft2 / 864e5);
    const hours2 = ~~((timeleft2 % 864e5) / 36e5);
    const minutes2 = ~~((timeleft2 % 36e5) / 6e4);
    const seconds2 = ~~((timeleft2 % 6e4) / 1e3);

    countdown2.innerHTML = output2.replace('%a', days2).replace('%b', hours2).replace('%c', minutes2).replace('%e', seconds2);
  }
  countDownDate2();
  setInterval(countDownDate2, 1e3);

})()

