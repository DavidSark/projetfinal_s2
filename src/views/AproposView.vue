<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <h1 class="mt-24 mb-20 text-center font-quicksand text-4xl font-light tracking-widest text-white">ASKME</h1>
    <img class="mt-10 w-screen" src="/src/assets/images/vaguewhite.png" alt="vague" />

    <!--PREMIERE CARDS!-->
    <div class="mt-9 ml-12 mr-12 w-auto rounded-2xl bg-white opacity-80 drop-shadow-lg">
      <p class="text-lgw-auto p-5 text-center font-montserrat tracking-wider text-neutral-800">LA SOLUTION POUR PROGRESSER !</p>
      <p class="pl-5 pb-5 pr-5 text-center font-raleway text-sm text-neutral-800">
        Askme t'accompagne pour ton éducation grâce à de nombreux<strong> espaces d'échanges.</strong>
      </p>
      <p class="pl-5 pb-7 pr-5 text-center font-raleway text-sm text-neutral-800">
        En misant principalement sur l'entraide, nous souhaitons que chacun puisse trouver une aide sans aucune
        <strong>perte de temps !</strong>
      </p>
    </div>

    <p class="mt-4 mb-20 text-center text-sm text-white opacity-80">EN SAVOIR PLUS</p>

    <!--DEUXIEME CARDS!-->
    <div class="mt-9 ml-12 mr-12 w-auto rounded-2xl bg-white opacity-80 drop-shadow-lg">
      <p class="text-lgw-auto p-5 text-center font-montserrat tracking-wider text-neutral-800">UN GAIN DE TEMPS CONSEQUENT</p>
      <p class="pl-5 pb-5 pr-5 text-center font-raleway text-sm text-neutral-800">
        Accédez à une <strong>aide</strong> dont vous avez besoin quand vous en avez besoin grâce à Askme !
      </p>
      <p class="pl-5 pb-7 pr-5 text-center font-raleway text-sm text-neutral-800">
        En demandant une aide, vous êtes sûr de l’a recevoir dans des
        <strong>délais très court.</strong>
      </p>
    </div>

    <p class="mt-4 mb-20 text-center text-sm text-white opacity-80">EN SAVOIR PLUS</p>

    <img class="mt-10 w-screen" src="/src/assets/images/vaguewhite.png" alt="vague" />

    <h1 class="ml-6 mr-6 p-6 text-center font-quicksand text-3xl font-light tracking-widest text-white">L'EQUIPE ASKME</h1>

    <!--MELINA SOCIALS!-->
    <div class="flex justify-center">
      <img class="mt-10 w-52" src="/src/assets/images/melinasocials.png" alt="melina social" />
    </div>
    <p class="mb-12 text-center font-quicksand tracking-wider text-white">Mélina BOUCHELLEGHEM</p>

    <!--DAVID SOCIALS!-->
    <div class="flex justify-center">
      <img class="mt-10 w-52" src="/src/assets/images/davidsocials.png" alt="david social" />
    </div>
    <p class="mb-12 text-center font-quicksand tracking-wider text-white">David SARKISSIAN</p>

    <!--BAPTISTE SOCIALS!-->
    <div class="flex justify-center">
      <img class="mt-10 w-52" src="/src/assets/images/baptistesocials.png" alt="baptiste social" />
    </div>
    <p class="mb-12 text-center font-quicksand tracking-wider text-white">Baptiste ROGNON</p>
    <div class="mb-20"></div>
    <!--footer!-->
    <Menuu></Menuu>
  </div>
</template>
<script>
//import { MenuIcon } from "@heroicons/vue/solid";

import Menuu from "../components/Menu.vue";

export default {
  name: "App",
  components: {
    Menuu,
  },
};
</script>