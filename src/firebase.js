import { getDatabase,ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4SSYS6EVg8wWpcMAUixCwPdcis2yjfKc",
  authDomain: "psychologists-8a8db.firebaseapp.com",
  databaseURL: "https://psychologists-8a8db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-8a8db",
  storageBucket: "psychologists-8a8db.appspot.com",
  messagingSenderId: "769656068762",
  appId: "1:769656068762:web:d6607f0362c9c72ee71d23"
};

export const app = initializeApp(firebaseConfig);
export const database = ref(getDatabase(app));
export const auth = getAuth(app);
 