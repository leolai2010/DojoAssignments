package pokemon;

public class PokemonTest {

	public static void main(String[] args) {
		Pokedex pokedex = new Pokedex();
		Pokemon Leo = pokedex.createPokemon("Leo", 100, "Poison");
		Pokemon Brian = pokedex.createPokemon("Brian", 120, "Fire");
			pokedex.pokemonInfo(Leo);
			pokedex.attackPokemon(Brian);
			pokedex.pokemonInfo(Brian);
	}

}
