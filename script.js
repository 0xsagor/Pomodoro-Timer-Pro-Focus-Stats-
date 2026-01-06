let time = 25 * 60;
let interval = null;
let sessions = Number(localStorage.getItem("sessions")) || 0;

document.getElementById("sessions").innerText = sessions;

function update() {
  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");
  document.getElementById("time").innerText = `${min}:${sec}`;
}

function start() {
  if (interval) return;
  interval = setInterval(() => {
    time--;
    update();
    if (time <= 0) {
      clearInterval(interval);
      interval = null;
      sessions++;
      localStorage.setItem("sessions", sessions);
      document.getElementById("sessions").innerText = sessions;
      time = 25 * 60;
      update();
    }
  }, 1000);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  time = 25 * 60;
  update();
}

update();
