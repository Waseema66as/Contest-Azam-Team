// sing-up-emain
// sing-up-pass
// log-in-emain
// log-in-pass
// btn-log-in
// btn-sing-up
 // Toggle between login and signup forms
 document.getElementById('log-in-now').addEventListener('click', () => {
    document.getElementById('sign_up').style.display = 'none';
    document.getElementById('log_in').style.display = 'block';
  });

  document.getElementById('sign-up-now').addEventListener('click', () => {
    document.getElementById('sign_up').style.display = 'block';
    document.getElementById('log_in').style.display = 'none';
  });

  // Signup functionality
  document.getElementById('btn-signup').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-pass').value;

    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Signup successful!');
      document.getElementById('sign_up').style.display = 'none';
      document.getElementById('log_in').style.display = 'block';
      $(".jquery-modal").toggle();
    } else {
      alert('Please fill in all fields.');
    }
  });

  // Login functionality
  document.getElementById('btn-login').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      alert('Login successful!');
      $(".jquery-modal").toggle();
      // Redirect or close modal as needed
    } else {
      alert('Invalid email or password.');
    }
  });