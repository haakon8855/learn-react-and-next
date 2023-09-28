import { IPokemonList } from "@/interfaces/PokemonInterfaces";
import Link from "next/link";

const Page = async () => {
  const pokemon = await getPokemon();

  return (
    <main>
      <h1>List of pokemon:</h1>
      <ol>
        {pokemon.map((p: IPokemonList) => {
          return (
            <li key={p.name}>
              <Link href={`/pokemon/${p.name}`}>{p.name}</Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
};

const getPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();
  const pokemon: IPokemonList[] = data.results;
  return pokemon;
};

export default Page;
