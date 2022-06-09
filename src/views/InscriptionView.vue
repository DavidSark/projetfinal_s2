<template>
   <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
   
<form @submit.prevent="onInscr">
      <input v-model="user.email" type="email" placeholder="Adresse e-mail" required>
      <input v-model="user.login" type="text" placeholder="pseudo" required/>
      <input v-model="user.password" type="password" placeholder="Mot de passe" required>
      <button type="submit">S'inscrire</button>
    </form>
    
     <div class="mt-10 bg-[url('/public/BackgroundFooter.svg')] bg-no-repeat bg-cover ">
         
         <div class="flex justify-center pt-16">
         <div class="mx-5"><Tiktok /></div>
         <div class="mx-5"><Facebook /></div>
         <div class="mx-5"><Instagram /></div>
         
         </div>
         <p class="mt-8 mx-8 text-center pb-10 text-white text-raleway font-thin">
           © Blumee. All <span class="font-bold">rights reserved 
          C.G.U & Mentions légales</span>
        </p>
      </div>
  </div>
</template>

<script >
import Logo from '../components/icones/Logo.vue'
import InputEmail from '../components/InputEmail.vue';
import InputMdp from '../components/InputMdp.vue';
import InputPseudonyme from '../components/InputPseudonyme.vue';
import FlecheConnexion from '../components/icones/FlecheConnexion.vue'
import BackgroundFooter from '../components/icones/BackgroundFooter.vue';
import Tiktok from '../components/icones/Tiktok.vue'
import Facebook from '../components/icones/Facebook.vue'
import Instagram from '../components/icones/Instagram.vue'

import { 
    getAuth,                        // Fonction générale d'authentification
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,     // Se connecter avec un email + mot de passe
    signOut,                      // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import { 
    getFirestore,   
    collection,     
    addDoc,         

    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
export default {
  
  
  name: "App",
  components: {
    Logo,
    InputEmail,
    InputMdp,
    FlecheConnexion,
    BackgroundFooter,
    Tiktok,
    Facebook,
    Instagram,
    InputPseudonyme,
},

data() {
        return {
            user:{              // Utilisateur : email + mot de passe
                email : '',
                password : '',
                login:'',
            },
            }
      },
    methods: {

    onInscr() {
      createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
            this.$router.push('/connexion');    
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
}
</script>