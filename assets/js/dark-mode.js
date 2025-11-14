
function colorScheme() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.querySelector('html');
  const storedTheme = localStorage.getItem('theme');

  const systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");

  function prefersDark() {
    return systemInitiatedDark.matches;
  }

  function setTheme(theme) {
    html.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }

  if (storedTheme) {
    setTheme(storedTheme);
  } else if (prefersDark()) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  if (toggle) {
      toggle.addEventListener('click', () => {
        const theme = html.classList.contains('dark') ? 'light' : 'dark';
        setTheme(theme);
      });
  }

  systemInitiatedDark.addListener(e => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

document.addEventListener('DOMContentLoaded', colorScheme);
