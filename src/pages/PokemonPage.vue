<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <!-- Picture -->
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <!-- Opciones -->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <!-- Message -->
      <h2 class="fade-in">{{ message }}</h2>
      <!-- New Game -->
      <button @click.prevent="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

// console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  mounted() {
    this.mixPokemonArray();
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(id) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (this.pokemon.id === id) {
        this.message = `Correcto, es ${this.pokemon.name}`;
      } else {
        this.message = `Ups, es ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
};
</script>

<style lang="css" scoped>
button {
  padding: 10px;
  border: none;
  background-color: brown;
  color: white;
  cursor: pointer;
}
</style>