<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mt-8 flex justify-center">
      <Logo class="w-16"></Logo>
    </div>
    <div class="mt-10 flex justify-center font-mulish text-white">
      <div class="mx-10">
        <p class="inline border-b-2 px-3 uppercase">Sign in</p>
      </div>
      <div class="mx-10 uppercase opacity-25">
        <RouterLink to="/inscription" class="inline border-b-2 px-3">Sign up</RouterLink>
        <RouterView></RouterView>
      </div>
    </div>
    <div @submit.prevent="onCnx" class="mx-9 h-auto rounded-2xl bg-white bg-opacity-20 drop-shadow-2xl">
      <div class="z-1001 relative mx-12 flex items-center justify-center pt-10">
        <input
          type="email"
          v-model="user.email"
          placeholder="E-mail*"
          required
          class="
            mr-3
            mt-5
            flex
            w-full
            flex-none
            border-b-2 border-white border-opacity-60
            bg-white bg-opacity-0
            font-mulish
            text-sm text-white
            placeholder-white placeholder-opacity-95
            outline-none
          "
        />
      </div>

      <div class="z-1001 relative mx-12 mt-10 flex items-center justify-center">
        <input
          placeholder="Mot de passe*"
          :type="type"
          v-model="user.password"
          required
          class="
            mr-3
            mt-5
            flex
            w-full
            flex-none
            border-b-2 border-white border-opacity-60
            bg-white bg-opacity-0
            font-mulish
            text-sm text-white
            placeholder-white placeholder-opacity-95
            outline-none
          "
        />
      </div>

      <div class="mt-10 text-center text-white" role="alert">
        {{ message }}
      </div>
      <div class="mx-10 mt-9 text-left">
        <p class="font-raleway text-xs text-white">
          En vous connectant, vous acceptez nos <span class="font-bold">Conditions d’utilisation</span> &
          <span class="font-bold">Politiques privées</span>.
        </p>
      </div>

      <div class="flex justify-center">
        <button
          type="submit"
          class="mt-8 mb-10 flex h-8 w-20 items-center justify-center rounded-full bg-white bg-opacity-10 drop-shadow-2xl"
          @click="onCnx()"
        >
          <FlecheConnexion></FlecheConnexion>
        </button>
      </div>
    </div>
    <div class="mt-10 bg-[url('/public/BackgroundFooter.svg')] bg-cover bg-no-repeat">
      <div class="flex justify-center pt-16">
        <div class="mx-5"><img src="src/assets/images/facebook.png" alt="" /></div>
        <div class="mx-5"><img src="src/assets/images/instagram.png" alt="" /></div>
        <div class="mx-5"><img src="src/assets/images/tiktok.png" alt="" /></div>
      </div>
      <p class="text-raleway mx-8 mt-8 pb-10 text-center font-thin text-white">
        © Askme. All <RouterLink to="/mentions"><span class="font-bold">rights reserved C.G.U & Mentions légales</span></RouterLink>
      </p>
    </div>
  </div>
</template>

<script >
import Logo from "../components/icones/Logo.vue";
import FlecheConnexion from "../components/icones/FlecheConnexion.vue";


import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

//Import de l'emetteur depuis main.js
import { emitter } from "../main.js";

export default {
  name: "App",
  components: {
    Logo,
    FlecheConnexion,

  },
  name: "MonCompte",
  data() {
    return {
      user: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
      },
      message: null, // Message de connexion
      view: false, // Afficher / cacher le mot de passe
      type: "password", // Type de champs pour le password : password / text pour l'afficher
      imageData: null, // Image prévisualisée pour création compte
    };
  },
  mounted() {
    // Montage de la vue
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK - mise à jour du user
          this.user = response.user;
          // Emission evenement de connexion
          emitter.emit("connectUser", { user: this.user });
          console.log("user", this.user);
          // Mise à jour du message
          this.message = "User connecté : " + this.user.email;

          this.$router.push("/accueil");
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    // Se deconnecter
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          // Mise à jour du message
          this.message = "User non connecté";
          // Ré initialisation des champs
          this.user = {
            email: null,
            password: null,
          };
          // Emission évènement de déconnexion
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    previewImage: function (event) {
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
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>
