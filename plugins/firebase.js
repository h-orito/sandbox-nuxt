import firebase from 'firebase'

const config = {
  databaseURL: process.env.DATABASEURL,
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

export default firebase
