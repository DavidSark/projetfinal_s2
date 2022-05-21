<template>
  <div class="mx-4 flex h-16 items-center justify-between rounded-xl drop-shadow-xl bg-white">
    <IconeProfile class="w-14"></IconeProfile>
    <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <FlecheDroit class="w-12"></FlecheDroit>
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