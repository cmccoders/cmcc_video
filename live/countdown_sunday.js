function nextDay(date, dow) {
  date.setDate(date.getDate() + (dow + (7 - date.getDay())) % 7);
  return date;
}

function startCountdown(end, display, options) {
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var dotCounter = 1;
  var timer = setInterval(function () {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      // clearInterval(timer);
      var dots = '';
      for (let index = 0; index < dotCounter; index++) {
        dots += '.';
      }
      if (++dotCounter > options.dotCount) {
        dotCounter = 1;
      }
      display.textContent = dots;
    } else {
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      if (days > 0) {
        display.textContent = days + " days " + hours + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
      } else {
        display.textContent = hours + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
      }
    }

  }, 1000);
}

window.onload = function () {
  const options = JSON.parse(document.getElementById("data").text);
  var date = new Date();
  date.setHours(options.startHour, options.startMinute);
  var then = nextDay(date, options.dayOfWeek);
  console.log(then);
  var display = document.querySelector('#countdown');
  startCountdown(then, display, options.countdown || { dotCount: 9 });
};