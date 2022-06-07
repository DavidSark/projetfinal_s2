<template>
   <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
   

    <div class="flex justify-center mt-8"> 
      <Logo class="w-16"></Logo>
     
    </div>
    
      <form @submit.prevent="onCnx">
                    <div class="card-body">                          
                        <div class="row">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Email</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Adresse mail" type="email"
                                    v-model="user.email" required />                    
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Mot de passe</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Mot de passe" 
                                    :type="type" v-model="user.password" required
                                    />                    
                            </div>
                        </div>    

                        <div class="alert alert-warning" role="alert">
                            {{message}}
                        </div>
                    </div>

                    <div class="card-footer">  
                        <button type="submit" class="float-left btn btn-dark" @click="onCnx()"  >
                        Connexion
                          
                        </button>

                        <button type="button" class="float-right btn btn-dark"
                            @click="onDcnx()" >
                            Deconnexion
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
import FlecheConnexion from '../components/icones/FlecheConnexion.vue'
import BackgroundFooter from '../components/icones/BackgroundFooter.vue';
import Tiktok from '../components/icones/Tiktok.vue'
import Facebook from '../components/icones/Facebook.vue'
import Instagram from '../components/icones/Instagram.vue'


import { 
    getAuth,                        // Fonction générale d'authentification
    signInWithEmailAndPassword,     // Se connecter avec un email + mot de passe
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

//Import de l'emetteur depuis main.js
import { emitter } from '../main.js';

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

        onCnx(){                
            // Se connecter avec user et mot de passe           
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response)=>{
                // Connexion OK - mise à jour du user
                this.user = response.user;
                // Emission evenement de connexion
                emitter.emit('connectUser', { user: this.user });
                console.log("user",this.user);                
                // Mise à jour du message
                this.message = "User connecté : "+this.user.email;

                //this.$router.push('/')
            })
            .catch((error) =>{
                // Erreur de connexion
                console.log('Erreur connexion', error);
                this.message = "Erreur d'authentification";
            })
        },
        
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
            })
            .catch(error=>{
                console.log('erreur deconnexion ', error);
            })
        },


        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

    }
}
</script>
