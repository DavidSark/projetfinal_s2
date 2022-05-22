
<template>
  <div class="border-gradient-to-r h-max w-screen rounded-t-3xl border-4 bg-white from-baby-blue to-blue-electric">
    <div class="flex items-center justify-between p-2">
      <RouterLink to="/apropos"><Info></Info></RouterLink>
      <RouterLink to="/"><Home></Home></RouterLink>
      <RouterLink to="/demande"><Ajout></Ajout></RouterLink>
      <RouterLink to="tchat"><Discussion></Discussion></RouterLink>
      <RouterLink to="/profil"><Profile></Profile></RouterLink>
    </div>
  </div>
</template>   


<script>
import Info from "./icones/Info.vue";
import Home from "./icones/Home.vue";
import Ajout from "./icones/Ajout.vue";
import Discussion from "./icones/Discussion.vue";
import Profile from "./icones/Profile.vue";

export default {
  components: {
    Info,
    Home,
    Ajout,
    Discussion,
    Profile,
  },
};
</script>
