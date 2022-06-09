<template>
    <div class="container ">  
          <div class="mx-6 my-6  flex justify-center">
            <IconeProfile class="w-14"></IconeProfile>
          </div>
          
          <div class="text-center">
        <h2 class="inline-block border-b-2 px-4 font-quicksand text-xl font-extralight uppercase text-white">Messagerie</h2>
      </div>
       

       
        <div class="font-quicksand">        
            
                <div class="text-center mt-5 mb-3">
                    <span class="text-white" >Sélectionnez un utilisateur..</span>
                </div>
                <div class="flex justify-center">
                  <select class="custom-select rounded-full w-3/4 px-2" v-model="userSelected" @change="selectUser">
                      <option selected disabled value="">Sélectionnez un utilisateur</option>
                      <option
                          v-for="util in listeUsers" :key="util.uid"
                          :value="util"
                      >{{util.login}}</option> 
                  </select>
                 </div>
            </div>
            
            <div v-if="userSelected != null" class="mt-5 font-quicksand mb-24"> 
                <form class="mb-3 mt-5" @submit.prevent="createDisc()">
                    <div class=" text-center flex justify-center items-center flex-col">
                        <div class="text-white">
                            <span class="input-group-text">Nouveau fil avec {{userSelected.login}}</span>
                        </div>
                       
                          <input type="text" placeholder="Nommez la discussion" class="rounded-full px-2 w-3/4" v-model="libelle" required />
                          <button class="font-quicksand mt-3 text-white" type="submit" title="Création">
                              <p>Créer</p>
                          </button>
                      
                    </div>
                    
                </form>
 <div class=" m-auto my-5 w-1/2 border-2 border-white "></div>
                <h5 class="text-center text-white font-quicksand">Vos fils de discussion avec : {{userSelected.login}}</h5>
                <div v-if="chat.length > 0" class="flex justify-center"> 
                    <table class="text-white mt-3">
                        <tbody>
                            <tr v-for="disc in chat" :key="disc.uid">
                                <td>
                                    - {{disc.libelle}} 
                                </td>
                                <td>
                                    <button class="mx-3" type="button" @click="viewFil(disc)" title="Voir ce fil">
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                    </button>

                                    <button class="mx-3" type="button" @click="deleteFil(disc)" title="Supprimer ce fil">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.875 5.75H4.79167H20.125" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.66666 5.75008V3.83341C7.66666 3.32508 7.86859 2.83757 8.22804 2.47813C8.58748 2.11868 9.07499 1.91675 9.58332 1.91675H13.4167C13.925 1.91675 14.4125 2.11868 14.7719 2.47813C15.1314 2.83757 15.3333 3.32508 15.3333 3.83341V5.75008M18.2083 5.75008V19.1667C18.2083 19.6751 18.0064 20.1626 17.6469 20.522C17.2875 20.8815 16.8 21.0834 16.2917 21.0834H6.70832C6.19999 21.0834 5.71248 20.8815 5.35304 20.522C4.99359 20.1626 4.79166 19.6751 4.79166 19.1667V5.75008H18.2083Z" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.58334 10.5417V16.2917" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.4167 10.5417V16.2917" stroke="white" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div v-else class="text-white text-center">
                    Aucun fil de discussion
                </div>


                <div class=" m-auto my-5 w-1/2 border-2 border-white"></div>

                <div v-if="discussion != null" > 
                    <div class="text-black bg-white w-screen p-4 text-center">
                        <h5> {{discussion.libelle}}</h5>
                    </div>
                    
                    <div class=" flex items-center justify-center mt-6">
                        <textarea class="mx-6 w-4/5 msg rounded-2xl px-3" rows="3" 
                            placeholder="Message" 
                            v-model="message"
                        ></textarea>
                        <div class="mr-5" >
                            <button class="btn btn-dark" @click="sendMsg()">
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91666 17.5C2.91666 25.5541 9.44584 32.0833 17.5 32.0833C25.5541 32.0833 32.0833 25.5541 32.0833 17.5C32.0833 9.44581 25.5541 2.91663 17.5 2.91663C9.44584 2.91663 2.91666 9.44581 2.91666 17.5Z" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.6667 17.5L17.5 23.3333L23.3333 17.5" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.5 11.6666L17.5 23.3333" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="mt-8" v-for="disc in chat" :key="disc.id">

                        <div v-if="disc.id == discussion.id"> 

                            <div v-for="msg in sortMsgByDate(disc.msg)" :key="msg.date">
                            <!-- tchat -->
                                <div class="text-black" v-if="msg.by == user.uid">
                                    <div class="col-4" >
                                       
                                        
                                    </div>
                                    <div class="bg-white w-2/4 m-auto rounded-2xl ml-6 p-2 mt-3"> 
                                                             
                                            <p>{{msg.contenu}}</p>
                                                         
                                    </div>
                                </div>
                                <div class="text-xs ml-6">
                                     {{userInfo[0].login}} - {{dateFr(msg.date)}} 
                                </div>
                                  

                                <div class=" " v-if="msg.by == userSelected.uid">            
                                    <div class="bg-white bg-opacity-80 w-2/4  m-auto rounded-2xl mr-6 p-2 mt-3 "> 
                                                               
                                            <p>{{msg.contenu}}</p>
                                   
                                    </div>
                                    <div class="text-xs ml-6 flex justify-end">
                                    {{userSelected.login}} - {{dateFr(msg.date)}}
                                      </div>  
                                </div>
                            
                            </div>
                        
                        
                        
                        
                        </div>

                    </div>

                </div>
            </div>
        </div>
<div>
        <Menuu class="mt-52 "></Menuu>
      </div>
   
</template>

<script>

import IconeProfile from '../components/icones/IconeProfile.vue';
import BoutonFleche from '../components/icones/BoutonFleche.vue';
import Menuu from '../components/Menu.vue'
import FlecheDroit from '../components/icones/FlecheDroit.vue';

// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDoc,        // Obtenir un document d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy,        // Permet de demander le tri d'une requête query
    where           // Permet de demander un filtrage pour une query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL         // Permet de récupérer l'adress complète d'un fichier du Storage
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

export default {

   name: "App",
  components: {
    IconeProfile,
    BoutonFleche,
    Menuu,
    FlecheDroit,
    },

    name:'ChatView',
    data() { // Les données
        return {
            user:null,                  // User connecté
            listeUsers:[],              // Liste des utilisateurs (Firestore)
            userInfo:null,              // Informations complémentaires du user connecté
            userSelected:null,          // L'utilisateur de la liste sélectionné
            libelle:null,               // Libelle de la nouvelle discussion à créer

            chatFrom:null,              // Les chats de l'utilisataur connecté vers celui sélectionné
            chatTo:null,                // Les chats des autres utilisateurs vers celui connecté                        
            chat:[],                  // Tous les chats utilisateur connecté et sélectionné

            discussion:null,            // chat/discussion sélectionnée

            message:null                // Message courant du chat/discussion

        }
    },
    mounted(){ // Montage de la vue
        // Appel de la liste des users (Firestore)
        this.getUsers(); 
    },

    methods : { // Les fonctions
        // obtenir les utilisateurs de users
        async getUsers(){
            // Obtenir les inofrmations du user connecté
            await getAuth().onAuthStateChanged(function(user){
                if(user){
                    // Récupération du user connecté
                    this.user = user;
                }
            }.bind(this))

            // Informations des users de Firestore
            const firestore = getFirestore();
            // Collection users de Firestore
            const dbUsers = collection(firestore, "users");
            // Users triés sur leur login
            const q = query(dbUsers, orderBy('login', 'asc'));
            // Liste synchronisée
            await onSnapshot(q, (snapshot) => {
                this.listeUsers = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération de l'url des avatars
                this.listeUsers.forEach(function(user){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupérer l'image par son nom de fichier
                    const spaceRef = ref(storage, "users/"+user.avatar);
                    // Récupération de l'url
                    getDownloadURL(spaceRef)
                    .then((url)=>{
                        // Remplacer le nom du fichier par l'url
                        user.avatar = url;
                    })
                    .catch((error)=>{
                        console.log('erreur downloadurl',error);
                    })
                })

                // Récupérer les infos complémentaires du user connecté
                this.userInfo = this.listeUsers.filter(user => user.uid == this.user.uid);
//console.log("userInfo", this.userInfo);
                // Suppression du user connecté de la liste
                this.listeUsers = this.listeUsers.filter(user => user.uid != this.user.uid);
//console.log("ListeUsers", this.listeUsers);

            })
        },

        async selectUser(){
            this.message = null;
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données concernée
            const dbChat = collection(firestore, "chat");
            // Liste des users emetteur vers recepteur
            let list1 = [this.user.uid, this.userSelected.uid];
            // Requête
            let q1 = query(dbChat, where("fil", "==", list1));
            // Liste synchronisée
            
            await onSnapshot(q1, (snapshot) => {
                this.chatFrom = snapshot.docs.map(doc => (
                    {id: doc.id, ...doc.data()}
                ))
            
                // Liste des users selectionne / connecté
                let list2 = [this.userSelected.uid, this.user.uid ];
                // Requête
                let q2 = query(dbChat, where("fil", "==", list2));
                // Liste synchronisée                
                onSnapshot(q2, (snapshot) => {
                    this.chatTo = snapshot.docs.map(doc => (
                        {id: doc.id, ...doc.data()}
                    ))

                    // Fusion des 2 chats from et to dans le chat
                    this.chat = this.chatFrom.concat(this.chatTo);
//console.log("chat", this.chat);                

                })
            
            
            
            
            
            })

        },

        // Création d'une nouvelle discussion
        createDisc(){
            // Au moins un message pour initialisation de la discussion
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: "Créé le "+this.dateSql(),     // Message + Date du jour
                date : this.dateSql()                   // Date de création
            };

            let discussion = {
                creation: this.dateSql(),                   // Date création de la discussion
                fil:[this.user.uid, this.userSelected.uid], // De qui vers qui : 0 : emetteur - 1: recepteur
                libelle : this.libelle,                     // Libelle de la discussion
                msg:[msg]
            };
            // Mise à jour de la collection chat
            addDoc(collection(getFirestore(), 'chat'), discussion);
        },

        // Mise en forme de la date du jour
        // en format SQL : yyyy-mm-dd HH:mm:ss
        dateSql(){
            let today = new Date();
            // Transformer en format local
            // format : dd/mm/yyyy, HH:mm:ss
            today = today.toLocaleString();
            // Mise en forme en format yyyy-mm-dd HH:mm:ss
            let tab = today.split(',');
            // récupérer seulement la partie date
            let d = tab[0];
            // récupération du jour, mois, année
            let dt = d.split('/');
            let jour = dt[0];
            let mois = dt[1];
            let annee = dt[2];
            // date en format bdd
            today = annee+"-"+mois+"-"+jour+" "+tab[1].trim();
            return today;
        },

        // Mise en forme d'un date
        // d'un format : yyyy-mm-dd HH:mm:ss
        // en format : dd/mm/yyyy à HH:mm
        dateFr(date){
            // découpage de la date
            let d = date.split(' ');
            // Récupérer la partie jour, mois, année
            let dt = d[0].split('-');
            let jour = dt[2];
            let mois = dt[1];
            let annee = dt[0];
            // récuperer la partie H:mm:ss
            let ht = d[1].split(':');
            // date en format français
            let dateMsg = jour+"/"+mois+"/"+annee+" à "+ht[0]+":"+ht[1];
            return dateMsg;
        },


        viewFil(disc){
            this.discussion = disc;
        },

        deleteFil(disc){
            deleteDoc(
                doc(getFirestore(), 'chat', disc.id)
            );
        },

        async sendMsg(){
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: this.message,                  // Message rédigé
                date : this.dateSql()                   // Date de création
            };

            // Rechargement de la discussion
            // Pour avoir tous les messages
            // surtout le dernier
            const firestore = getFirestore();
            const docRef = doc(firestore, "chat", this.discussion.id);
            let refDisc = await getDoc(docRef);
            let tabMsg = refDisc.data().msg;
            tabMsg.push(msg);
            // Mise à jour de la discussion
            updateDoc(
                doc(firestore, "chat", this.discussion.id),
                {
                    msg:tabMsg
                }
            );

        },

        sortMsgByDate(tabMsg){
            return tabMsg.sort(function(a,b){
                // Si la date du message a est avant celle du message b on retourne 1
                if(a.date < b.date) return 1;
                // Si la date du message a est après celle du message b on retourne -1
                if(a.date > b.date) return -1;
                // Sinon ni avant ni après on retourne 0
                return 0;
            })
        }


    }
}
</script>




