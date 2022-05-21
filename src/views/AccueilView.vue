  <template>
  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-baby-blue to-blue-electric">
    <div class="mx-6 my-6  flex justify-center">
      <IconeProfile class="w-14"></IconeProfile>
    </div>

    <div class="mb-8 text-center font-quicksand text-white">
      <p class="text-xl">Bienvenue sur Askme !</p>
      <p class="text-sm text-gris">Tagline?</p>
    </div>

    <div class="text-center">
      <div class="">
        <h2 class="inline-block border-b-2 font-quicksand text-xl font-extralight text-white">Espace d'aide</h2>
      </div>

      <div class="mx-8 rounded-3xl bg-gris pb-6 ">
        

        <div>
          <InputRecherche class="mb-5"></InputRecherche>
          <div class="640:grid 640:grid-cols-2">
            <CardDemandeDroit class="640:mt-5" />
            <CardDemandeGauche class="mt-5" />
            <CardDemandeDroit class="mt-5" />
            <CardDemandeGauche class="mt-5" />
            <CardDemandeDroit class="mt-5" />
            <CardDemandeGauche class="640:mt-5 hidden 640:visible"/>
          </div>
        </div>
      </div>

     <div class="w-screen bg-soft-beige h-32 my-9">
       
     </div>

    <div>
      <Menuu></Menuu>
    </div>     
    </div>
  </div>
</template>
  
<script>
//import { MenuIcon } from "@heroicons/vue/solid";
import IconeProfile from '../components/icones/IconeProfile.vue';
import InputRecherche from '../components/InputRecherche.vue';
import CardDemandeDroit from '../components/CardDemandeDroit.vue';
import CardDemandeGauche from '../components/CardDemandeGauche.vue';
import Menuu from '../components/Menu.vue';


export default {
  name: "App",
  components: {
   IconeProfile,
   InputRecherche,
   CardDemandeDroit,
   CardDemandeGauche,
   Menuu,
  },
};
</script>