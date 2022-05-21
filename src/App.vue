<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <menu1 class="ml-7 mt-7" />
    <h1 class="mt-24 mb-16 text-center font-quicksand text-3xl font-light tracking-widest text-white">ASKME PASS</h1>

    <!--<nav v-if="$route.name !== 'Accueil'">!-->
    <RouterLink to="/apropos">A propos</RouterLink>

    <RouterView />

    <!--footer!-->
    <div class="grid place-content-center">
      <img class="mt-9" src="../src/assets/images/vaguefooter.png" alt="Vague footer" />
      <div class="flex justify-center space-x-7">
        <img class="" src="../src/assets/images/tiktok.png" alt="tiktok footer" />
        <img class="" src="../src/assets/images/facebook.png" alt="facebook footer" />
        <img class="" src="../src/assets/images/instagram.png" alt="instagram footer" />
      </div>
      <p class="mt-5 ml-8 mr-8 text-center font-raleway text-sm text-white">© Blumee. All rights reserved C.G.U - Mentions légales</p>
    </div>
  </div>
</template>

<script >
import menu1 from "./components/icones/menuicon.vue";
export default {
  name: "App",
  components: { menu1 },
};
</script>