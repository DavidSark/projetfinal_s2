<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mt-8 flex justify-center">
      <Logo class="w-16"></Logo>
    </div>

    <div class="mt-10 flex justify-center font-mulish text-white">
      <div class="mx-10 uppercase opacity-25">
        <RouterLink to="/"><p class="inline border-b-2 px-3 uppercase">Sign in</p></RouterLink>
      </div>
      <div class="mx-10 uppercase">
        <RouterLink to="/inscription" class="inline border-b-2 px-3">Sign up</RouterLink>
        <RouterView></RouterView>
      </div>
    </div>

    <form @submit.prevent="onInscr" class="mx-9 h-auto rounded-2xl bg-white bg-opacity-20 drop-shadow-2xl">
      <div class="z-1001 relative mx-12 flex items-center justify-center pt-10">
        <input
          v-model="user.login"
          type="text"
          placeholder="Pseudonyme*"
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
          v-model="user.email"
          type="email"
          placeholder="Adresse e-mail*"
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
          v-model="user.password"
          type="password"
          placeholder="Mot de passe*"
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

      <div class="mx-10 mt-9 text-left">
        <p class="font-raleway text-xs text-white">
          En vous inscrivant, vous acceptez nos <span class="font-bold">Conditions d’utilisation</span> &
          <span class="font-bold">Politiques privées</span>.
        </p>
      </div>

      <div class="flex justify-center">
        <button
          type="submit"
          class="mt-8 mb-10 flex h-8 w-20 items-center justify-center rounded-full bg-white bg-opacity-10 drop-shadow-2xl"
        >
          <FlecheConnexion></FlecheConnexion>
        </button>
      </div>
    </form>

    <div class="mt-10 bg-[url('/public/BackgroundFooter.svg')] bg-cover bg-no-repeat">
      <div class="flex justify-center pt-16">
        <div class="mx-5"><img src="../assets/images/facebook.png" alt="" /></div>
        <div class="mx-5"><img src="../assets/images/instagram.png" alt="" /></div>
        <div class="mx-5"><img src="../assets/images/tiktok.png" alt="" /></div>
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
  createUserWithEmailAndPassword, // Se connecter avec un email + mot de passe

} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


export default {
  name: "App",
  components: {
    Logo,
    FlecheConnexion,
  },

  data() {
    return {
      user: {
        // Utilisateur : email + mot de passe
        email: "",
        password: "",
        login: "",
      },
    };
  },
  methods: {
    onInscr() {
      createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          this.$router.push("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>