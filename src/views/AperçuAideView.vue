<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mx-6 my-6  flex justify-center">
      <IconeProfile class="w-14"></IconeProfile>
    </div>

    <div class="text-center">
      <div class="">
        <h2 class="inline-block border-b-2 font-quicksand text-xl font-extralight text-white uppercase px-4">Aperçu</h2>
      </div>

      <div class="mx-8 rounded-3xl bg-white pb-6 ">
        

        <div class="flex justify-center flex-col items-center mt">
          
         
          <div class="text-left mx-5 mt-5 text-gris_surligner font-raleway">
                        <td class="text-center">                                        
                                                                       
                        </td>
                        <p>{{participant.nom}}</p>
                         <p>{{participant.desc}}</p>
                          <p>{{participant.text}}</p>
                  

          </div>
         <p class="font-raleway text-gris_surligner mt-4">Aider !</p>
          <RouterLink to="/tchat"><BoutonFleche class="w-16"></BoutonFleche></RouterLink>
          
          </div>
          
      </div>

     <div class="w-screen bg-soft-beige h-32 my-9">
       
     </div>

    <div>
      <menuu></menuu>
    </div>     
    </div>
  </div>
</template>

<script>
import IconeProfile from '../components/icones/IconeProfile.vue';
import BoutonFleche from '../components/icones/BoutonFleche.vue';
import Menuu from '../components/Menu.vue'

import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy,
    doc,
    getDoc,        // Permet de demander le tri d'une requête query
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


// Cloud Storage : import des fonctions
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
  name: "App",
  components: {
    IconeProfile,
    BoutonFleche,
    Menuu,
    },
    name:'ListeView',
  data() {
    return {
            listeParticipant:[],
              participant:{           
                nom:null,
                desc:null,
                text:null,  },
            refParticipant:null,     
            photoActuelle:null 

        }
    },
    mounted(){ // Montage de la vue
        // Appel de la liste des participants
        this.getParticipants();
        console.log("id participant", this.$route.params.id);     
      this.getParticipant(this.$route.params.id);
    },
    methods: {
      async getParticipant(id){
           
            const firestore = getFirestore();
            const docRef = doc(firestore, "demandes", id);
            this.refParticipant = await getDoc(docRef);
            if(this.refParticipant.exists()){
                this.participant = this.refParticipant.data();
                this.photoActuelle = this.participant.text;
            }else{
                this.console.log("Participant inexistant");
            }
        },
        
        async getParticipants(){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            const dbPart = collection(firestore, "demandes");
            // Liste des participants triés sur leur nom
            const q = query(dbPart, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeParticipant = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération des images de chaque participant
                // parcours de la liste
               })      
        },
    }
};
</script>









