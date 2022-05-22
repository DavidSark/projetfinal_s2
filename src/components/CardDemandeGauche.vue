<template>
  <div class="mx-4 flex h-16 flex-row-reverse items-center justify-between rounded-xl bg-white drop-shadow-xl">
    <IconeProfile class="w-14"></IconeProfile>
    <p class="font-raleway text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <RouterLink to="/aperçu"><FlecheDroit class="w-7"></FlecheDroit></RouterLink>
  </div>
</template>


<script>
import IconeProfile from "../components/icones/IconeProfile.vue";
import FlecheDroit from "../components/icones/FlecheDroit.vue";

export default {
  name: "App",
  components: {
    IconeProfile,
    FlecheDroit,
  },
};
</script>