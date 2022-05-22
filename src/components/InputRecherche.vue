
<template>
  <div class="z-1001 relative mx-12 flex items-center justify-center">
    <input
      v-model="input"
      type="text"
      placeholder="Rechercher..."
      class="
        mr-3
        mt-5
        flex
        w-full
        flex-none
        border-b-2
        border-gris_surligner
        bg-gris
        font-raleway
        text-sm
        text-gris_surligner
        placeholder-gris_surligner
        outline-none
        focus:border-indigo-500
      "
    />

    <div>
      <BoutonFleche class="mt-5 w-5"></BoutonFleche>
    </div>
  </div>
</template>


<script>
import BoutonFleche from "./icones/BoutonFleche.vue";

export default {
  components: {
    BoutonFleche,
  },
};
</script>
