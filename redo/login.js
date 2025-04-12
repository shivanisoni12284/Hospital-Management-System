const toggleLink = document.getElementById('toggleForm');
const formTitle = document.getElementById('formTitle');
const emailBox = document.getElementById('emailBox');
const submitBtn = document.getElementById('submitBtn');
let isSignUp = false;

toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  isSignUp = !isSignUp;
  if (isSignUp) {
    formTitle.textContent = 'Sign Up';
    emailBox.style.display = 'block';
    submitBtn.textContent = 'Sign Up';
    toggleLink.textContent = 'Sign In';
    toggleLink.previousSibling.textContent = 'Already have an account? ';
  } else {
    formTitle.textContent = 'Sign In';
    emailBox.style.display = 'none';
    submitBtn.textContent = 'Sign In';
    toggleLink.textContent = 'Sign Up';
    toggleLink.previousSibling.textContent = "Don't have an account? ";
  }
});