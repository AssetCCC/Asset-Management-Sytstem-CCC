const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Replace with your user's UID
const uid = 'BHmp9PT1PUhMEC8XkpZ1yG1CQoQ2';

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('Admin claim set for user:', uid);
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error setting admin claim:', error);
    process.exit(1);
  });

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Login button clicked");
});