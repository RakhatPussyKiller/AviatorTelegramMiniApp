const PASSWORD = "1526";
const BOOST_PASSWORD = "4859";
let history = [];
const FIXED_COEFFICIENTS = [3.21, 5.05, 39.04, 3.83];  // фиксированные коэффициенты

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
  const box = document.getElementById("coefficient-box");

  // Проверяем, есть ли уже все фиксированные коэффициенты в истории
  if (history.length < FIXED_COEFFICIENTS.length) {
    // Добавляем фиксированный коэффициент
    const fixedValue = FIXED_COEFFICIENTS[history.length];
    history.unshift(fixedValue.toFixed(2));
    box.innerText = `Коэффициент: ${fixedValue.toFixed(2)}`;
  } else {
    // Генерируем случайный коэффициент
    const randomValue = randomInRange(1, 10);
    box.innerText = `Коэффициент: ${parseFloat(randomValue).toFixed(2)}`;
    history.unshift(randomValue.toFixed(2));
  }

  // Обновляем историю (если она больше 10, удаляем старые элементы)
  if (history.length > 10) history.pop();

  document.getElementById("history-ticker").innerText =
    "Акыркы коэффициенттер: " + history.join(" • ");
  box.classList.remove("hidden");
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function updateHistory(value) {
  history.unshift(value);
  if (history.length > 10) history.pop();
  document.getElementById("history-ticker").innerText =
    "Акыркы коэффициенттер: " + history.join(" • ");
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
