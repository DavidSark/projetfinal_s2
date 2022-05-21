
<template>
  <div class="flex relative justify-center items-center z-1001 mx-12">
    <input
      v-model="input"
      type="text"
      placeholder="Rechercher..."
      class="
        flex
        bg-gris
        w-full
        mr-3
        placeholder-gris_surligner
        text-gris_surligner
        flex-none
        border-b-2 border-gris_surligner
        text-sm
        outline-none
        focus:border-indigo-500
        mt-5
      "
    />


    <div>
         <BoutonFleche class="w-5 mt-5"></BoutonFleche>
    </div>
  </div>
</template>


<script>
import BoutonFleche from './icones/BoutonFleche.vue';

export default {
  components: {
      BoutonFleche,
  },
};
</script>
