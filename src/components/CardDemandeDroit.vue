<template>
  <div class="mx-4 flex h-16 items-center justify-between rounded-xl drop-shadow-xl bg-white">
    <IconeProfile class="w-14"></IconeProfile>
    <p class="text-xs text-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <RouterLink to="/connexion"><FlecheDroit class="w-7"></FlecheDroit></RouterLink>
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