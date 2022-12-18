var firebaseConfig = {
  apiKey: "AIzaSyDQL5xaPx9XFN-ja2BIJ4ad6Ud5eom0qmE",
  authDomain: "contactform-dfdb2.firebaseapp.com",
  databaseURL: "https://contactform-dfdb2-default-rtdb.firebaseio.com",
  projectId: "contactform-dfdb2",
  storageBucket: "contactform-dfdb2.appspot.com",
  messagingSenderId: "555709161599",
  appId: "1:555709161599:web:a9e41ca4ac9d15a519df4a"
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database()
.ref('Contact data website');

document.getElementById('contactForm')
.addEventListener('submit', submitForm);

function submitForm(e) {
e.preventDefault();

// Get values
var name = getInputVal('name');
var email = getInputVal('email');
var message = getInputVal("message");

saveMessage(name, email, message);
document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
var newMessageRef = messagesRef.push();
newMessageRef.set({
  name: name,
  email: email,
  message: message,
});
}

