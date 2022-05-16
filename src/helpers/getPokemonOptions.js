const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));

  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonOptions = () => {
  const mixed = getPokemons().sort(() => Math.random() - 0.5);

  getPokemonNames(mixed.splice(0, 4));
};

const getPokemonNames = ([a, b, c, d] = []) => {};

export default getPokemonOptions;
