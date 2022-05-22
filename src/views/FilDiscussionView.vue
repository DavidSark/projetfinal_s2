<template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mx-6 my-6  flex justify-center">
      <IconeProfile class="w-14"></IconeProfile>
    </div>

    <div class="text-center">
      <div class="">
        <h2 class="inline-block border-b-2 font-quicksand text-xl font-extralight text-white uppercase px-4">Tchat</h2>
      </div>

      <div class="mx-8 rounded-3xl bg-white md:grid md:grid-cols-2 ">
        <div class="flex items-center justify-evenly border-b-2 md:border-r-2">
            <IconeProfile class="opacity-0 absolute 375p:opacity-100 375p:relative"></IconeProfile>
                <div class="flex flex-col items-start mx-2">
                        <p class="font-quicksand">Martin</p>
                        <p class="text-left text-xs 425p:text-base text-gris_surligner font-raleway ">Lorem ipsum dolor sit amet.</p>
                        <p class="text-left text-xs text-gris_surligner font-raleway ">Envoyé  auj à 13:57</p>
                </div>
                    <RouterLink to="/tchat"><FlecheDroit class=" w-8"></FlecheDroit></RouterLink> 
        </div>
          
        <div class="flex items-center justify-evenly border-b-2">
            <IconeProfile class="opacity-0 absolute 375p:opacity-100 375p:relative"></IconeProfile>
                <div class="flex flex-col items-start mx-2">
                        <p class="font-quicksand">Léa</p>
                        <p class="text-left text-xs 425p:text-base text-gris_surligner font-raleway ">Lorem ipsum dolor sit amet.</p>
                        <p class="text-left text-xs text-gris_surligner font-raleway ">Envoyé à l'instant</p>
                </div>
                    <RouterLink to="/tchat"><FlecheDroit class=" w-8"></FlecheDroit></RouterLink> 
        </div>

        <div class="flex items-center justify-evenly md:border-r-2 ">
            <IconeProfile class="opacity-0 absolute 375p:opacity-100 375p:relative"></IconeProfile>
                <div class="flex flex-col items-start mx-2">
                        <p class="font-quicksand">Anonyme</p>
                        <p class="text-left text-xs 425p:text-base text-gris_surligner font-raleway ">Lorem ipsum dolor sit amet.</p>
                        <p class="text-left text-xs text-gris_surligner font-raleway ">Envoyé hier</p>
                </div>
                    <RouterLink to="/tchat"><FlecheDroit class=" w-8"></FlecheDroit></RouterLink> 
        </div>

      </div>

            <div class="w-screen bg-soft-beige h-32 my-9">
                
                </div>

    <div>
      <menuu class="mt-12"></menuu>
    </div>     
    </div>
  </div>
</template>

<script>
import IconeProfile from '../components/icones/IconeProfile.vue';
import BoutonFleche from '../components/icones/BoutonFleche.vue';
import Menuu from '../components/Menu.vue'
import FlecheDroit from '../components/icones/FlecheDroit.vue';


export default {
  name: "App",
  components: {
    IconeProfile,
    BoutonFleche,
    Menuu,
    FlecheDroit,
    },
};
</script>









