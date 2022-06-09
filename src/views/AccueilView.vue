  <template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mx-6 my-6 flex justify-center">
      <IconeProfile class="w-14"></IconeProfile>
    </div>
    
    <div class="mb-8 text-center font-quicksand text-white">
      <p class="text-xl">Bienvenue sur Askme !</p>
    </div>

    <div class="text-center">
      <div class="">
        <h2 class="inline-block border-b-2 px-4 font-quicksand text-xl font-extralight uppercase text-white">Espace d'aide</h2>
      </div>

      <div class="mx-8 rounded-3xl bg-gris pb-6 lg:mb-32">
        <div>
          <div class="z-1001 relative mx-12 flex items-center justify-center">
            <input
              class="
                mr-3
                mt-5
                mb-5
                flex
                w-full
                flex-none
                border-b-2
                border-gris_surligner
                bg-gris
                font-raleway
                text-sm
                text-gris_surligner
                placeholder-gris_surligner
                outline-none
                focus:border-indigo-500
              "
              placeholder="Rechercher..."
              v-model="filter"
            />
          </div>

          <div class="flex flex-col items-center justify-center font-raleway">
            <div
              v-for="part in filterByNom"
              :key="part.id"
              class="mx-4 my-3 flex h-auto w-4/5 items-center justify-between rounded-xl bg-white p-3 text-left drop-shadow-xl 375p:text-sm 425p:text-base"
            >
              <div class="mx-3 w-full">
                <RouterLink class="font-semibold text-stone-700" :to="{ name: 'Apercu', params: { id: part.id } }">{{
                  part.nom
                }}</RouterLink>
                <div class="mt-3 flex justify-between">
                  <p class="mr-4">{{ part.desc }}</p>
                  <RouterLink :to="{ name: 'Apercu', params: { id: part.id } }">
                    <FlecheDroit class="h-auto w-7"></FlecheDroit>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-14"><img class="w-screen lg:hidden" src="/src/assets/images/pubadidas.png" alt="" /></div>

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
import FlecheDroit from "../components/icones/FlecheDroit.vue";

import Menuu from "../components/Menu.vue";

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../main.js";

export default {
  name: "App",
  components: {
    IconeProfile,
    InputRecherche,
    CardDemandeDroit,
    Menuu,
    FlecheDroit,
  },

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "Vidéo", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
      listeParticipant: [],
      nom: null,
      listeArtisteSynchro: [],
      filter: "",
    };
  },

  computed: {
    //Tri des catégories par ordre alpha
    orderByNom: function () {
      return this.listeArtisteSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },

    filterByNom: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByNom.filter(function (groupe) {
          return groupe.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByNom;
      }
    },
  },

  mounted() {
    this.getUserConnect();
    emitter.on("connectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      this.getUserInfo(this.user);
    });
    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user déconnecté", this.user);
      this.userInfo = null;
      this.name = "Vidéo";
      this.avatar = null;
      this.isAdmin = false;
    });

    this.getParticipants();
    this.getArtisteSynchro();
  },
  methods: {
    async getArtisteSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtiste = collection(firestore, "demandes");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtisteSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async getParticipants() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPart = collection(firestore, "demandes");
      // Liste des participants triés sur leur nom
      const q = query(dbPart, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeParticipant = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
      });
    },
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },
    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>