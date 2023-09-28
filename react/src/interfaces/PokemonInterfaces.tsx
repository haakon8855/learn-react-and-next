export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface ISprites {
  front_default: string;
  front_shiny: string;
  versions: {
    "generation-v": {
      "black-white": {
        animated: {
          front_default: string;
          front_shiny: string;
        };
        front_default: string;
        front_shiny: string;
      };
    };
  };
}

export interface IPokemon {
  id: number;
  name: string;
  types: IPokemonType[];
  sprites: ISprites;
  abilities: IAbility[];
}

export interface IFlavorText {
  flavor_text: string;
  language: {
    name: string;
  };
  version: {
    name: string;
  };
}

export interface IPokemonSpecies {
  id: number;
  name: string;
  flavor_text_entries: IFlavorText[];
}
