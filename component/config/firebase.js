import firebase from 'firebase';
const firebaseConfig = {
    apiKey: 'AIzaSyASTzWe6XzVYeicAEgwhWuCE5iWLut7OSY',
    authDomain: 'reactsimple-53fe4.firebaseapp.com',
    databaseURL: 'https://reactsimple-53fe4.firebaseio.com',
    projectId: 'reactsimple-53fe4',
    storageBucket: '',
    messagingSenderId: '978668570436',
    appId: '1:978668570436:web:4d9832a34156ce0ec33911',
  };
  const Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase;