import { initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkdnK1TqxJG8sUa-H_onJ1amtCpQcNpjY",
    authDomain: "finsight-fbeed.firebaseapp.com",
    projectId: "finsight-fbeed",
    storageBucket: "finsight-fbeed.appspot.com",
    messagingSenderId: "139957955318",
    appId: "1:139957955318:web:fb5ef22989e25048369ad7",
    measurementId: "G-1TYKM74SN5"
  };
  
  // Initialize Firebase
  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


