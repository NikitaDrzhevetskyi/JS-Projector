let button = document.getElementById('button')
let message = document.getElementById('message')
let buttonState = initializeButton()

function getStoredButtonState() {
  return (
    JSON.parse(localStorage.getItem('buttonState')) || {
      isDarkMode: false,
      lastToggle: null,
    }
  )
}

function updateButtonUI({ isDarkMode, lastToggle }) {
  let buttonText = isDarkMode ? 'Turn On' : 'Turn Off'
  button.textContent = buttonText

  document.body.classList.toggle('dark-bg', isDarkMode)

  if (lastToggle !== null) {
    message.innerHTML = `Last turn ${lastToggle}`
  } else {
    message.innerHTML = 'Never toggled'
  }
}

function getCurrentDateTime() {
  let now = new Date()
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
}

function saveButtonState() {
  localStorage.setItem('buttonState', JSON.stringify(buttonState))
}

function initializeButton() {
  let storedButtonState = getStoredButtonState()
  updateButtonUI(storedButtonState)
  return storedButtonState
}

function handleButtonClick() {
  buttonState.isDarkMode = !buttonState.isDarkMode
  buttonState.lastToggle = getCurrentDateTime()
  updateButtonUI(buttonState)
  saveButtonState()
}


button.addEventListener('click', handleButtonClick)
