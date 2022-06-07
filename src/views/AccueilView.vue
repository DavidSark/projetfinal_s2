  <template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mx-6 my-6 flex justify-center">
      <IconeProfile class="w-14"></IconeProfile>

     
    </div>
    <div class="flex flex-col">
      <RouterLink to="/connexion">Connexion</RouterLink>
      <RouterLink to="/inscription">Inscription</RouterLink>
    </div>

    <div class="mb-8 text-center font-quicksand text-white">
      <p class="text-xl">Bienvenue sur Askme !</p>
      <p class="text-sm text-gris">Tagline?</p>
    </div>

    <div class="text-center">
      <div class="">
        <h2 class="inline-block border-b-2 px-4 font-quicksand text-xl font-extralight uppercase text-white">Espace d'aide</h2>
      </div>

      <div class="mx-8 rounded-3xl bg-gris pb-6">
        <div>
          <InputRecherche class="mb-5"></InputRecherche>
          <div class="640:grid 640:grid-cols-2">
            <CardDemandeDroit class="640:mt-5" />
            <CardDemandeDroit class="mt-5" />
            <CardDemandeDroit class="mt-5" />
          </div>
        </div>
      </div>

      <div class="my-9 h-32 w-screen bg-soft-beige"></div>

      <div>
        <Menuu></Menuu>
      </div>
    </div>
  </div>
</template>
  
<script>
//import { MenuIcon } from "@heroicons/vue/solid";
import IconeProfile from "../components/icones/IconeProfile.vue";
import InputRecherche from "../components/InputRecherche.vue";
import CardDemandeDroit from "../components/CardDemandeDroit.vue";

import Menuu from "../components/Menu.vue";

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

import { emitter } from '../main.js';

export default {
  name: "App",
  components: {
    IconeProfile,
    InputRecherche,
    CardDemandeDroit,
    Menuu,
  },


   data(){
    return{
      user: {
        email: null,
        password: null,
      },
      userInfo:null,      // Informations complémentaires user connecté
      name:"Vidéo",       // Titre de l'application ou nom du user
      avatar:null,        // Avatar / image du user connecté
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
      this.avatar = null;
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
          const spaceRef = ref(storage, 'users/'+this.userInfo[0].avatar);
          getDownloadURL(spaceRef)
            .then((url) => {
              this.avatar = url;
            })
            .catch((error) =>{
              console.log('erreur downloadUrl', error);
            })
        });
      }
  }
};
</script>