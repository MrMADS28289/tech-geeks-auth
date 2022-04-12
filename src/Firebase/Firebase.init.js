import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCJl-R_9k8hfvh_V2pURPJv43ZFOX23tPo",
    authDomain: "tech-geeks-26d31.firebaseapp.com",
    projectId: "tech-geeks-26d31",
    storageBucket: "tech-geeks-26d31.appspot.com",
    messagingSenderId: "569484537741",
    appId: "1:569484537741:web:027b3a28a25adc838417c4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;