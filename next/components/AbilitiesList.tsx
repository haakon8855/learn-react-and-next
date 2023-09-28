import { IAbility } from "@/interfaces/PokemonInterfaces";
import ListComponent from "./ListComponent";
import ListItemComponent from "./ListItemComponent";

type Props = {
  abilities: IAbility[];
};

const AbilitiesList = ({ abilities }: Props) => {
  return (
    <ListComponent>
      {abilities.map((ability, i) => {
        return (
          <ListItemComponent first={i === 0} last={i === abilities.length - 1}>
            <p className="first-letter:capitalize ">{ability.ability.name}</p>
          </ListItemComponent>
        );
      })}
    </ListComponent>
  );
};

export default AbilitiesList;
