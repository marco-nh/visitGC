import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyD29QRnOF1KFWHiNbzGozqOHV-Mu1YG0OY",
    authDomain: "visitgc-e47ab.firebaseapp.com",
    databaseURL: "https://visitgc-e47ab-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "visitgc-e47ab",
    storageBucket: "visitgc-e47ab.appspot.com",
    messagingSenderId: "910480298115",
    appId: "1:910480298115:web:9e1e7aca4e103d5b50cbb6",
    measurementId: "G-SEQX1QKW4B"
};
  
  
export const app = initializeApp(firebaseConfig);