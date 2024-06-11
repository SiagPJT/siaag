import firebase from 'firebase/compat/app'
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAa23_Haj-QkLlgvIBSnh2_I9H7OtaMFWs",
    authDomain: "sitesiag.firebaseapp.com",
    projectId: "sitesiag",
    storageBucket: "sitesiag.appspot.com",
    messagingSenderId: "587847285695",
    appId: "1:587847285695:web:b8bdacbfe38c477753bf0a",
    measurementId: "G-4SC6P9FE9G"
  };

if (firebase.apps.lenght===0)
    
{
    firebase.initializeApp(firebaseconfig)
    console.log('conectado')
}

const db = getDatabase()
export {db}