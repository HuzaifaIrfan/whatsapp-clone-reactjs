import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDS3ck7vWwRNpTZRRUfe5aGkginuQvi_ns",
    authDomain: "whatsapp-clone-72206.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-72206.firebaseio.com",
    projectId: "whatsapp-clone-72206",
    storageBucket: "whatsapp-clone-72206.appspot.com",
    messagingSenderId: "218764665126",
    appId: "1:218764665126:web:bc5939e1a4e1f064b3e1e7",
    measurementId: "G-7TLCCC7L2G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)


  const db= firebaseApp.firestore()
  
  const auth= firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()


export {auth, provider};

export default db;
