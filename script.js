// Simple client-side login behavior
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameEl = document.getElementById('username');
  const passwordEl = document.getElementById('password');
  const messageEl = document.getElementById('message');
  const toggleBtn = document.getElementById('togglePwd');

  // Toggle password visibility
  toggleBtn.addEventListener('click', () => {
    const isPwd = passwordEl.type === 'password';
    passwordEl.type = isPwd ? 'text' : 'password';
    toggleBtn.textContent = isPwd ? 'Hide' : 'Show';
    toggleBtn.setAttribute('aria-label', isPwd ? 'Hide password' : 'Show password');
  });

  // Form submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearMessage();

    const username = usernameEl.value.trim();
    const password = passwordEl.value;

    // Basic validation
    if (!username) return showError('Please enter your username or email.');
    if (!password) return showError('Please enter your password.');

    // Demo authentication (replace with server call in real use)
    const demoUser = 'user';
    const demoPass = 'password';

    if (username === demoUser && password === demoPass) {
      showSuccess('Login successful — redirecting...');
      // In a real app, redirect or call backend API here
      setTimeout(() => {
        // simulate redirect
        window.location.href = '/';
      }, 1000);
    } else {
      showError('Invalid username or password.');
      passwordEl.focus();
    }
  });

  function showError(text) {
    messageEl.textContent = text;
    messageEl.className = 'error';
  }

  function showSuccess(text) {
    messageEl.textContent = text;
    messageEl.className = 'success';
  }

  function clearMessage() {
    messageEl.textContent = '';
    messageEl.className = '';
  }
});
