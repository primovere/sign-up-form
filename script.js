const pwd = document.querySelector('#user-pwd');
const confirmPwd = document.querySelector('#user-confirm-pwd');
const span = document.querySelector('.alert');

confirmPwd.addEventListener('input', () => {
  if (pwd.value !== confirmPwd.value) {
    span.textContent = 'PASSWORDS DO NOT MATCH';
    confirmPwd.classList.add('error');
  } else {
    span.textContent = '';
    confirmPwd.classList.toggle('error');
  }
});
