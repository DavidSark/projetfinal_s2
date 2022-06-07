<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    
      <div class= "text-center">
        <h2 class=" mt-9 inline-block border-b-2 font-quicksand text-xl font-extralight text-white uppercase px-4">Profil</h2>
      </div>
    <div class="mx-6 my-6  flex justify-center flex-col items-center">
      <IconeProfile class="w-32"></IconeProfile>
      <button>+</button>
    </div>

    <div class="text-center">
      

      <div class="mx-8 rounded-3xl bg-white md:grid md:grid-cols-2 ">
        <div class="flex items-center justify-evenly border-b-2 md:border-r-2">
            
                <div class="flex flex-col items-start ">
                        <p class="font-quicksand">Proposer son aide</p>
                </div>
                    <RouterLink to="/"><FlecheDroit class=" w-8"></FlecheDroit></RouterLink> 
        </div>
          
        <div class="flex items-center justify-evenly border-b-2">
           
                <div class="flex flex-col items-start ">
                        <p class="font-quicksand">Demande d'aide</p>
                </div>
                    <RouterLink to="/demande"><FlecheDroit class=" w-8"></FlecheDroit></RouterLink> 
        </div>

        <div class="flex items-center justify-evenly md:border-r-2 ">
      
                <div class="flex flex-col items-start ">
                        <p class="font-quicksand">Fil de discussion</p>
                </div>
                    <RouterLink to="/tchat"><FlecheDroit class=" w-8"></FlecheDroit></RouterLink> 
        </div>

        
      </div>
      

    <button @click="onDcnx()">
      <div class="flex justify-center mt-5">
        <BoutonDeconnection class="w-7"></BoutonDeconnection>
      </div>
    </button>
    <div>
      <menuu class="mt-8"></menuu>
    </div>     
    </div>
  </div>
</template>

<script>

import IconeProfile from '../components/icones/IconeProfile.vue';
import BoutonFleche from '../components/icones/BoutonFleche.vue';
import Menuu from '../components/Menu.vue'
import FlecheDroit from '../components/icones/FlecheDroit.vue';
import BoutonDeconnection from '../components/icones/BoutonDeconnection.vue';


import { 
    getAuth,                        // Fonction générale d'authentification
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

//Import de l'emetteur depuis main.js
import { emitter } from '../main.js';

export default {
  name: "App",
  components: {
    IconeProfile,
    BoutonFleche,
    Menuu,
    FlecheDroit,
    BoutonDeconnection
    },

     name:'MonCompte',
    data() {
        return {
            user:{              // Utilisateur : email + mot de passe
                email : '',
                password : ''
            },
            message:null,       // Message de connexion
            view:false,         // Afficher / cacher le mot de passe
            type:'password',    // Type de champs pour le password : password / text pour l'afficher
            imageData:null,     // Image prévisualisée pour création compte
        }
    },
    mounted(){ // Montage de la vue
        this.message = "User non connecté";
    },
    methods:{
        // Se deconnecter
        onDcnx(){
            // Se déconnecter
            signOut(getAuth())
            .then(response =>{
                // Mise à jour du message
                this.message = "User non connecté";
                // Ré initialisation des champs
                this.user = {
                    email:null,
                    password:null
                };
                // Emission évènement de déconnexion
                emitter.emit('deConnectUser', { user: this.user });
                this.$router.push('/connexion');

            })
            .catch(error=>{
                console.log('erreur deconnexion ', error);
            })
        },
    }
};
</script>









