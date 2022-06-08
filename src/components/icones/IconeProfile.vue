<template>
     <span v-if="photo != null">
            <img  class="rounded-full m-2" :src="photo"/>
            <p class="text-center">{{name}}</p>
          </span>
          
</template>

<script>
import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    query,
    where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Fonctions Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import { emitter } from '../../main.js';

export default {
  data(){
    return{
      user: {
        email: null,
        password: null,
      },
      userInfo:null,      // Informations complémentaires user connecté
      name:"",       // Titre de l'application ou nom du user
      photo:null,        // Avatar / image du user connecté
      isAdmin:false       // Si l'utilisateur est ou non administrateur
    }
  },

  mounted(){
    this.getUserConnect();


    emitter.on('connectUser', e => {
      this.user = e.user;
      console.log ('App => Reception user connecté', this.user);
      this.getUserInfo(this.user);
    })
    emitter.on('deConnectUser', e => {
      this.user = e.user;
      console.log('App => Reception user déconnecté', this.user);
      this.userInfo = null;
      this.name = 'Vidéo';
      this.photo = null;
      this.isAdmin = false;
    })

  },
  methods:{
     async getUserConnect(){
      await getAuth().onAuthStateChanged(function(user){
        if(user){
          this.user = user;
          this.getUserInfo(this.user);
        }
      }.bind(this));
    },
    async getUserInfo(user){
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
          this.userInfo = snapshot.docs.map(doc => (
            {id:doc.id, ...doc.data()}
          ));
          console.log("userInfo", this.userInfo);                
          // userInfo étant un tableau, onn récupère
          // ses informations dans la 1° cellule du tableau : 0
          this.name = this.userInfo[0].login;
          this.isAdmin=this.userInfo[0].admin;
          // Recherche de l'image du user sur le Storage
          const storage = getStorage();
          // Référence du fichier avec son nom
          const spaceRef = ref(storage, 'users/'+this.userInfo[0].photo);
          getDownloadURL(spaceRef)
            .then((url) => {
              this.photo = url;
            })
            .catch((error) =>{
              console.log('erreur downloadUrl', error);
            })
        });
      }
  }
  }



</script>