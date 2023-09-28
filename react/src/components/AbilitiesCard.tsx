import { Stack, Box, Typography, Divider } from "@mui/material";
import { IAbility } from "../interfaces/PokemonInterfaces";
import InfoCard from "./InfoCard";

type Props = {
  abilities: IAbility[];
};

const AbilitiesCard = ({ abilities }: Props) => {
  return (
    <InfoCard>
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        {abilities.map((ability) => (
          <Box
            sx={{
              paddingLeft: 2,
              paddingTop: 1,
              paddingBottom: 1,
              height: "30px",
            }}
            className="capitalise"
            key={ability.ability.name}
          >
            <Typography sx={{ paddingTop: 0.5 }} variant="body1" component="p">
              {ability.ability.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </InfoCard>
  );
};

export default AbilitiesCard;
