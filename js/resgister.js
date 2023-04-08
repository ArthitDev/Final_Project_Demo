// NOTE: Registration.
const registerForm = document.getElementById('register-form')

const handleSubmitRegister = (event) => {
  event.preventDefault()
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const re_password = document.querySelector('#re_password').value
  if (password !== re_password) {
    alert('Password do not match.')
    return
  }
  axios
    .post('http://127.0.0.1:3000/register', { name, email, password })
    .then((_) => {
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');
      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
        document.getElementById("main").style.backgroundImage = "url(./images/banner-bg-3.png)";
      });
    })
    .catch((error) => {
      console.error(error)
      const { response } = error
      if (response) {
        const { data } = response
        alert(data.message)
      } else {
        alert('An error occurred while submitting the form.')
      }
    })
}

registerForm.addEventListener('submit', handleSubmitRegister)


