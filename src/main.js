import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import mitt from 'mitt';


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIvfFI3MsQK-Y8gvkL-yQmgpZeCnZN4Wo",
    authDomain: "askme-c3551.firebaseapp.com",
    projectId: "askme-c3551",
    storageBucket: "askme-c3551.appspot.com",
    messagingSenderId: "731476025355",
    appId: "1:731476025355:web:7e93d5bf28380ab132a70e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
