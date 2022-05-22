<template>
   <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
   

    <div class="flex justify-center mt-8"> 
      <Logo class="w-16"></Logo>
     
    </div>
    
      <div class="flex justify-center mt-10 text-white font-mulish ">
        <div class="mx-10 ">
        <RouterLink to="/connexion" class="border-b-2 inline uppercase px-3  opacity-25 "> Sign in</RouterLink>
        </div>
        <div class="mx-10 uppercase">
        <p class="border-b-2 inline px-3">Sign up</p>
        <RouterView></RouterView>
        </div>
      </div>
      <div class="flex justify-center">
       <div class="bg-white bg-opacity-20 mx-9 rounded-2xl drop-shadow-2xl w-screen h-auto 
                  "> 
         <InputPseudonyme/>
         <InputEmail />
         <InputMdp />

          <div class="text-left mx-10 mt-9">
            <p class="font-raleway text-xs text-white">En vous connectant, vous acceptez nos   Conditions d’utilisation & Politiques priviées.</p>
            </div>
              <div class="flex justify-center items-center">
                <div class=" flex justify-center items-center w-20 h-8 bg-white bg-opacity-10 rounded-full drop-shadow-2xl mt-8 mb-10">
                  <button ><RouterLink to="/"><FlecheConnexion/></RouterLink></button>
              </div>
            </div>

            
          </div>
          
      </div>
     <div class="mt-10 bg-[url('/public/BackgroundFooter.svg')] bg-no-repeat bg-cover ">
         
         <div class="flex justify-center pt-16">
         <div class="mx-5"><Tiktok /></div>
         <div class="mx-5"><Facebook /></div>
         <div class="mx-5"><Instagram /></div>
         
         </div>
         <p class="mt-8 mx-8 text-center pb-10 text-white text-raleway font-thin">
           © Blumee. All <span class="font-bold">rights reserved 
          C.G.U & Mentions légales</span>
        </p>
      </div>
  </div>
</template>

<script >
import Logo from '../components/icones/Logo.vue'
import InputEmail from '../components/InputEmail.vue';
import InputMdp from '../components/InputMdp.vue';
import InputPseudonyme from '../components/InputPseudonyme.vue';
import FlecheConnexion from '../components/icones/FlecheConnexion.vue'
import BackgroundFooter from '../components/icones/BackgroundFooter.vue';
import Tiktok from '../components/icones/Tiktok.vue'
import Facebook from '../components/icones/Facebook.vue'
import Instagram from '../components/icones/Instagram.vue'



export default {
  name: "App",
  components: {
    Logo,
    InputEmail,
    InputMdp,
    FlecheConnexion,
    BackgroundFooter,
    Tiktok,
    Facebook,
    Instagram,
    InputPseudonyme,
},
};
</script>