const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyCG3kg_26SybwZy3jOnqoeQMRHsttA9pV0',
  authDomain: 'wesopt29-60b02.firebaseapp.com',
  projectId: 'wesopt29-60b02',
  storageBucket: 'wesopt29-60b02.appspot.com',
  messagingSenderId: '627138911510',
  appId: '1:627138911510:web:923aa658b8eb3de4da8437',
  measurementId: 'G-TZMBCT7B78',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
