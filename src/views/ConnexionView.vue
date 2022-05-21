<template>
   <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
   

    <div class="flex justify-center mt-8"> 
      <Logo class="w-16"></Logo>
     
    </div>
    
      <div class="flex justify-center mt-10">
        <div class="mx-10">
        <p class="border-b-2 inline ">Sign in</p>
        </div>
        <div class="mx-10">
        <p class="border-b-2 inline ">Sign up</p>
        </div>
      </div>
      <div class="flex justify-center">
       <div class="bg-white bg-opacity-20 mx-9 rounded-2xl drop-shadow-2xl w-screen h-screen"> 
         <InputEmail />
         <InputMdp />

          <div class="text-left mx-10 mt-9">
            <p class="font-raleway text-xs text-white">En vous connectant, vous acceptez nos   Conditions d’utilisation & Politiques priviées.</p>
            </div>
              <div class="flex justify-center items-center">
                <div class=" flex justify-center items-center w-20 h-8 bg-white bg-opacity-10 rounded-full drop-shadow-2xl mt-8">
                  <FlecheConnexion/>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script >
import Logo from '../components/icones/Logo.vue'
import InputEmail from '../components/InputEmail.vue';
import InputMdp from '../components/InputMdp.vue';
import FlecheConnexion from '../components/icones/FlecheConnexion.vue'

export default {
  name: "App",
  components: {
    Logo,
    InputEmail,
    InputMdp,
    FlecheConnexion,
},
};
</script>