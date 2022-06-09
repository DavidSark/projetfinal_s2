<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mx-6 my-6 flex justify-center">
      <IconeProfile class="w-14"></IconeProfile>
    </div>

    <div class="text-center">
      <div class="">
        <h2 class="inline-block border-b-2 px-4 font-quicksand text-xl font-extralight uppercase text-white">Demande d'aide</h2>
      </div>

      <div class="mx-8 rounded-3xl bg-white pb-6">
        <div class="mt flex flex-col items-center justify-center">
          <form class="w-full text-sm" enctype="multipart/form-data" @submit.prevent="createParticipant">
          <div class="my-4">
              <input class="w-5/6  mt-11 rounded-2xl border-2 p-1 pl-2 375p:placeholder:text-sm
              425p:placeholder:text-base" type="text" placeholder="Nom de la demande..." v-model="participant.nom" required />
          </div>
          

            <div class="my-4">
              <input
                class="w-5/6 rounded-2xl border-2 p-1 pl-2 375p:placeholder:text-sm 425p:placeholder:text-base"
                type="text"
                placeholder="Objet de la demande..."
                v-model="participant.desc"
                required
              />
            </div>

            <div class="my-4">
              <textarea
                class="w-5/6 rounded-2xl border-2 p-1 pl-2 h-40 375p:placeholder:text-sm
                425p:placeholder:text-base "
                placeholder="Ecrivez votre demande..."
                v-model="participant.text"
                required
               ></textarea>
            </div>

            <button type="submit"><BoutonFleche class="mt-5 w-16"></BoutonFleche></button>
          </form>

          <div class="mx-5 mt-5 text-left font-raleway text-gris_surligner"></div>
        </div>
      </div>

      <div class="my-9 h-32 w-screen bg-soft-beige"></div>

      <div>
        <menuu></menuu>
      </div>
    </div>
  </div>
</template>

<script>
import IconeProfile from "../components/icones/IconeProfile.vue";
import BoutonFleche from "../components/icones/BoutonFleche.vue";
import InputMatiere from "../components/InputMatiere.vue";
import Menuu from "../components/Menu.vue";

import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      participant: {
        // Le participant à créer
        nom: null,
        desc: null,
        text: "",
      },
    };
  },
  name: "App",
  components: {
    IconeProfile,
    BoutonFleche,
    InputMatiere,
    Menuu,
  },

  methods: {
    async createParticipant() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "demandes/");
      // Upload de l'image sur le Cloud Storage
      // Création du participant sur le Firestore
      const db = getFirestore();
      const docRef = addDoc(collection(db, "demandes"), this.participant);
      // redirection sur la liste des participants
      this.$router.push("/");
    },
  },
};
</script>









