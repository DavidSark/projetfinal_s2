<template>
  <header>
    
   
    <nav>
      <ul>
      <li><RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink></li>
      <li><RouterLink to="/Mentions" class="text-blue-600 underline">Mentions Légale</RouterLink></li>
      </ul>
    </nav>
  </header>

 

  <RouterView />
</template>

<script>

export default {
  components: { },
};
</script>