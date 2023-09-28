import AbilitiesList from "@/components/AbilitiesList";
import Navbar from "@/components/Navbar";
import Sprite from "@/components/Sprite";
import TypesList from "@/components/TypesList";
import { IPokemon } from "@/interfaces/PokemonInterfaces";

type Props = {
  params: {
    name: string;
  };
};

const Page = async ({ params: { name } }: Props) => {
  const pokemon = await getPokemon(name);

  if (!pokemon) {
    return <h1>Could not find pokemon</h1>;
  }

  const navIndexes = [];
  for (let i = -2; i <= 2; i++) {
    const currentIndex = pokemon.id;
    const nextIndex = currentIndex + i;
    if (nextIndex < 1) {
      navIndexes.push(0);
    } else {
      navIndexes.push(nextIndex);
    }
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="pt-10">
        <div className="max-w-lg mx-auto bg-[#e0d8c0] rounded-lg shadow-md p-5 text-black">
          <h1 className="text-6xl first-letter:capitalize">{pokemon.name}</h1>
          <h2>#{pokemon.id}</h2>
          <Sprite sprites={pokemon.sprites} />
          <div className="flex">
            <TypesList types={pokemon.types} />
            <AbilitiesList abilities={pokemon.abilities} />
          </div>
        </div>
      </div>

      <div className="pb-5">
        <Navbar navIndexes={navIndexes} />
      </div>
    </div>
  );
};

const getPokemon = async (name: string) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data: IPokemon = await res.json();
    return data;
  } catch {
    return null;
  }
};

export default Page;
