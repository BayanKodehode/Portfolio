let toggleBtn = document.getElementById("toggle-btn");
let darkMode = localStorage.getItem("dark-mode");


toggleBtn.onclick = (e) => {
  console.log('(e onclick)');

  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
    
  } else {
    disableDarkMode();
  }
};

const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  document.body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  document.body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}
