const themeToggle = document.querySelector('.theme-toggle')
const logo = document.querySelector('.logo')

const currentTheme = localStorage.getItem('theme') || 'light'
if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark-mode')
  themeToggle.textContent = '☀️'
} else {
  themeToggle.textContent = '🌙'
}

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
  const isDarkMode = document.documentElement.classList.contains('dark-mode')
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙'
})

logo.addEventListener('click', () => {
  window.location.href = 'index.html'
})

function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div')
  alertDiv.className = `alert alert-${type}`
  alertDiv.textContent = message
  alertDiv.style.position = 'fixed'
  alertDiv.style.top = '80px'
  alertDiv.style.right = '20px'
  alertDiv.style.zIndex = '1000'
  alertDiv.style.maxWidth = '400px'
  
  document.body.appendChild(alertDiv)
  
  setTimeout(() => {
    alertDiv.style.animation = 'slideUp 0.3s ease forwards'
    setTimeout(() => alertDiv.remove(), 300)
  }, 3000)
}
