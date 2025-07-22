
const auth = firebase.auth();

function register() {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById('status').innerText = "Registered: " + userCredential.user.email;
    })
    .catch((error) => {
      document.getElementById('status').innerText = "Error: " + error.message;
    });
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById('status').innerText = "Logged in: " + userCredential.user.email;
    })
    .catch((error) => {
      document.getElementById('status').innerText = "Error: " + error.message;
    });
}
