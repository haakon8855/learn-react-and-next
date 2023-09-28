import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type Pokemon = {
  name: string;
  url: string;
};

type ApiResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
};

const PokemonList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon-species");
      const data = (await res.json()) as ApiResponse;
      return data;
    },
  });

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  if (error || !data?.results) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <>
      <p>There are {data.count} Pokémon in the world:</p>
      <ol>
        {data.results.map((pkmn) => (
          <li className="pokemon-name" key={pkmn.name}>
            <Link to={`/pokemon/${pkmn.name}`}>{pkmn.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default PokemonList;
