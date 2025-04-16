const PASSWORD = "1526";
const BOOST_PASSWORD = "4859";
let history = [];

function showPasswordPrompt() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("password-screen").classList.remove("hidden");
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");
  } else {
    document.getElementById("wrong-password").classList.remove("hidden");
  }
}

function contactAdmin() {
  window.open("https://t.me/ManasAviatorBot", "_blank");
}

function generateCoefficient() {
  const value = randomInRange(1, 10); // случайное значение коэффициента
  const box = document.getElementById("coefficient-box");
  box.innerText = `Коэффициент: ${parseFloat(value).toFixed(2)}`; // отображение коэффициента
  box.classList.remove("hidden");
  updateHistory(parseFloat(value).toFixed(2));
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function updateHistory(value) {
  history.unshift(value);
  if (history.length > 10) history.pop();
  document.getElementById("history-ticker").innerText =
    "Акыркы коэффициенттер: " + history.join(" • "); // обновление истории коэффициентов
}

function showBoostPasswordPrompt() {
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("boost-screen").classList.remove("hidden");
}

function checkBoostPassword() {
  const input = document.getElementById("boost-password").value;
  if (input === BOOST_PASSWORD) {
    document.getElementById("accuracy").innerText = "100%"; // установка точности на 100%
    document.getElementById("boost-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");
    document.getElementById("boost-btn").classList.add("hidden");
  } else {
    document.getElementById("boost-message").classList.remove("hidden");
  }
}
