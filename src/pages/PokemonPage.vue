<template>
  <h1>¿Quién es este pokémon?</h1>

  <!-- Picture -->
  <PokemonPicture :pokemon-id="4" :show-pokemon="true"/>

  <!-- Opciones -->
  <PokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from '@/helpers/getPokemonOptions'


export default {
  components: { PokemonPicture, PokemonOptions },
};
</script>

<style lang="scss" scoped>
</style>