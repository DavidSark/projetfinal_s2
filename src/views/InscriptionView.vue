<template>
   <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
   
     <div class="flex justify-center mt-8"> 
      <Logo class="w-16"></Logo>
    </div>

    <div class="flex justify-center mt-10 text-white font-mulish ">
        <div class="mx-10 opacity-25 uppercase ">
          <RouterLink to="/connexion"><p class="border-b-2 inline uppercase px-3 ">Sign in</p></RouterLink>
        </div>
        <div class="mx-10 uppercase">
        <RouterLink to="/inscription" class="border-b-2 inline px-3">Sign up</RouterLink>
        <RouterView></RouterView>
        </div>
        </div>

<form @submit.prevent="onInscr" class="bg-white bg-opacity-20 mx-9 rounded-2xl drop-shadow-2xl h-auto">
    <div class="flex relative justify-center items-center z-1001 pt-10 mx-12 ">
      <input v-model="user.login" type="text" placeholder="Pseudonyme*" required class="
                                    font-mulish
                                    flex
                                    bg-white
                                    bg-opacity-0
                                    w-full
                                    mr-3
                                    placeholder-white
                                    placeholder-opacity-95
                                    text-white
                                    flex-none
                                    border-b-2 border-white
                                    border-opacity-60
                                    text-sm
                                    outline-none
                                    mt-5
                                " />
    </div>

    <div class="flex relative justify-center items-center z-1001 mt-10 mx-12 ">
      <input v-model="user.email" type="email" placeholder="Adresse e-mail*" required class="
                                    font-mulish
                                    flex
                                    bg-white
                                    bg-opacity-0
                                    w-full
                                    mr-3
                                    placeholder-white
                                    placeholder-opacity-95
                                    text-white
                                    flex-none
                                    border-b-2 border-white
                                    border-opacity-60
                                    text-sm
                                    outline-none
                                    mt-5
                                " /> 
    </div>

    <div class="flex relative justify-center items-center z-1001 mt-10 mx-12 ">
     <input v-model="user.password" type="password" placeholder="Mot de passe*" required class="
                                    font-mulish
                                    flex
                                    bg-white
                                    bg-opacity-0
                                    w-full
                                    mr-3
                                    placeholder-white
                                    placeholder-opacity-95
                                    text-white
                                    flex-none
                                    border-b-2 border-white
                                    border-opacity-60
                                    text-sm
                                    outline-none
                                    mt-5
                                " />
    </div>

    <div class="text-left mx-10 mt-9">
            <p class="font-raleway text-xs text-white">En vous inscrivant, vous acceptez nos <span class="font-bold">Conditions d’utilisation</span> & <span class="font-bold">Politiques priviées</span>.</p>
            </div>

     <div class="flex justify-center ">  
        <button type="submit" class="flex justify-center items-center w-20 h-8 bg-white bg-opacity-10 rounded-full drop-shadow-2xl mt-8 mb-10"> 
          <FlecheConnexion></FlecheConnexion>
          </button>
       </div>
</form>
    
     <div class="mt-10 bg-[url('/public/BackgroundFooter.svg')] bg-no-repeat bg-cover ">
         
         <div class="flex justify-center pt-16">
         <div class="mx-5"><Tiktok /></div>
         <div class="mx-5"><Facebook /></div>
         <div class="mx-5"><Instagram /></div>
         
         </div>
         <p class="mt-8 mx-8 text-center pb-10 text-white text-raleway font-thin">
           © Askme. All <span class="font-bold">rights reserved 
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