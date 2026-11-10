(() => {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-label');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let hasOverride = false;

  try {
    const stored = localStorage.getItem('backbeat.theme');
    hasOverride = stored === 'light' || stored === 'dark';
  } catch {}

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    const nextLabel = theme === 'dark' ? '浅色' : '深色';
    label.textContent = nextLabel;
    button.setAttribute('aria-label', `切换到${nextLabel}模式`);
    themeColor.content = theme === 'dark' ? '#191918' : '#f6f3ed';
  };

  applyTheme(root.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));
  button.hidden = false;

  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    hasOverride = true;
    applyTheme(theme);
    try { localStorage.setItem('backbeat.theme', theme); } catch {}
  });

  systemTheme.addEventListener('change', (event) => {
    if (!hasOverride) applyTheme(event.matches ? 'dark' : 'light');
  });
})();
