function nextDay(date, dow) {
  date.setDate(date.getDate() + (dow + (7 - date.getDay())) %7);
  return date;
}

function startCountdown(end, display) {
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer = setInterval(function () {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      display.textContent = '00:00:00';
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    display.textContent = hours + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);

  }, 1000);
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  const options = JSON.parse(document.getElementById("data").text);
  var date = new Date();
  date.setHours(options.startHour, options.startMinute);
  var then = nextDay(date, options.dayOfWeek);
  console.log(then);
  var fiveMinutes = 60 * 5;
  var display = document.querySelector('#countdown');
  startCountdown(then, display);
};