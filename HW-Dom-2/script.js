'use strict'

let button = document.getElementById('button')
let message = document.getElementById('message')

let buttonState = JSON.parse(localStorage.getItem('buttonState')) || {
  isDarkMode: false,
  lastToggle: null,
}

updateUI(buttonState)

function updateUI({ isDarkMode, lastToggle }) {
  let buttonText = isDarkMode ? 'Turn On' : 'Turn Off'
  button.textContent = buttonText

  document.body.classList.toggle('dark-bg', isDarkMode)

  if (lastToggle !== null) {
    message.innerHTML = `Last turn: ${lastToggle}`
  } else {
    message.innerHTML = 'Never toggled'
  }
}

function getCurrentDateTime() {
  let now = new Date()
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
}

function saveState() {
  localStorage.setItem('buttonState', JSON.stringify(buttonState))
}

function handleSwitch() {
  buttonState.isDarkMode = !buttonState.isDarkMode
  buttonState.lastToggle = getCurrentDateTime()
  updateUI(buttonState)
  saveState()
}

button.addEventListener('click', handleSwitch)
