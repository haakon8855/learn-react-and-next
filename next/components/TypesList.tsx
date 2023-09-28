import { IPokemonType } from "@/interfaces/PokemonInterfaces";
import ListComponent from "./ListComponent";
import ListItemComponent from "./ListItemComponent";

const typeSpriteBaseUrl =
  "https://raw.githubusercontent.com/msikma/pokeresources/master/resources/type-icons/gen8/";

type Props = {
  types: IPokemonType[];
};

const TypesList = ({ types }: Props) => {
  return (
    <ListComponent>
      {types.map((type, i) => {
        return (
          <ListItemComponent first={i === 0} last={i === types.length - 1}>
            <img
              style={{ height: 20, paddingRight: 5 }}
              src={typeSpriteBaseUrl + type.type.name + ".svg"}
            />
            <p className="first-letter:capitalize ">{type.type.name}</p>
          </ListItemComponent>
        );
      })}
    </ListComponent>
  );
};
export default TypesList;
