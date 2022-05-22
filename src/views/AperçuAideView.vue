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
          <IconeProfile class="mt-5"></IconeProfile>
          <p class="font-quicksand">Martin</p>
          <div class="text-left mx-5 mt-5 text-gris_surligner font-raleway">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aut consequuntur officiis voluptatibus doloremque, dignissimos totam illo corporis quasi distinctio quibusdam porro quae veniam soluta vitae voluptates possimus ipsam hic.</p>
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


export default {
  name: "App",
  components: {
    IconeProfile,
    BoutonFleche,
    Menuu,
    },
};
</script>









