importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: 'AIzaSyDV3WAlz8ZNgX0zfcoOtdCpbfONTunsl0c',
  appId: '1:555034540330:web:388cb53e6fedba31f60653',
  messagingSenderId: '555034540330',
  projectId: 'glorypalace-hotel-a31ac',
  authDomain: 'glorypalace-hotel-a31ac.firebaseapp.com',
  databaseURL: 'https://glorypalace-hotel-a31ac-default-rtdb.firebaseio.com',
  storageBucket: 'glorypalace-hotel-a31ac.appspot.com',
  measurementId: 'G-BNBM7KYHN3',

});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
