
<template>
  <div class="flex relative justify-center items-center z-1001 mx-12">
    <select
      class="
        flex
        bg-white
        w-full
        mr-3
        placeholder-gris_surligner
        text-gris_surligner
        flex-none
        border-b-2 border-gris_surligner
        text-xs 
        375p:text-sm
        outline-none
        focus:border-indigo-500
        mt-5
        font-raleway
      " >
      <option value="">Sélectionne une matière</option>
      <option value="Mathématiques">Mathématiques</option>
      <option value="Français">Français</option>
      <option value="Physique">Physique</option>
      <option value="Chimie">Chimie</option>
    
    </select>


    
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
