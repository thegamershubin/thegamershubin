// app.js — simple demo interactions (no backend)
(function(){
  const toastEl = document.getElementById('toast');
  const modal = document.getElementById('modal');
  const registerBtn = document.getElementById('register-btn');

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    setTimeout(()=> { toastEl.hidden = true; }, 3000);
  }

  window.viewDemo = function(){
    const el = document.getElementById('tournaments');
    el.scrollIntoView({behavior:'smooth'});
    showToast('Viewing demo tournament');
  };

  registerBtn.addEventListener('click', () => {
    openModal();
  });

  window.openModal = function(){
    modal.hidden = false;
  };
  window.closeModal = function(){
    modal.hidden = true;
  };
  window.confirmRegister = function(){
    closeModal();
    showToast('Demo registration complete (simulated).');
  };

  // Simple auth button toggle (visual only)
  const signinBtn = document.getElementById('signin-btn');
  signinBtn.addEventListener('click', () => {
    if (signinBtn.textContent === 'Sign in') {
      signinBtn.textContent = 'Signed in';
      showToast('Signed in (demo). Admin actions hidden in demo.');
    } else {
      signinBtn.textContent = 'Sign in';
      showToast('Signed out (demo).');
    }
  });
})();
