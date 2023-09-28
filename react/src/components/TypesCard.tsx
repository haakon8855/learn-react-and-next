import { Stack, Box, Typography, Divider } from "@mui/material";
import { IPokemonType } from "../interfaces/PokemonInterfaces";
import InfoCard from "./InfoCard";

type Props = {
  types: IPokemonType[];
};

const typeSpriteBaseUrl =
  "https://raw.githubusercontent.com/msikma/pokeresources/master/resources/type-icons/gen8/";

const TypesCard = ({ types }: Props) => {
  return (
    <InfoCard>
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        {types.map((type) => (
          <Box
            sx={{ paddingLeft: 2, paddingTop: 1, paddingBottom: 1 }}
            className="capitalise"
            key={type.type.name}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              variant="body1"
              component="p"
            >
              <img
                style={{ height: 30, paddingRight: 5 }}
                src={typeSpriteBaseUrl + type.type.name + ".svg"}
              />
              {type.type.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </InfoCard>
  );
};

export default TypesCard;
