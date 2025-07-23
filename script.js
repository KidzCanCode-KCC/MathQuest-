document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const grade = document.getElementById('grade').value;

    if (!username || !password || !grade) {
      alert('Please fill in all fields!');
      return;
    }

    // Simulated login process (replace this with server-side login later)
    localStorage.setItem('mathQuestUser', JSON.stringify({
      username,
      password,
      grade,
      progress: {}
    }));

    // Redirect to dashboard
    window.location.href = `dashboard.html?user=${encodeURIComponent(username)}`;
  });
});
