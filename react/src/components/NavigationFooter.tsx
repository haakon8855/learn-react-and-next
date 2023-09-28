import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  pokemonId: number;
};

const NavigationFooter = ({ pokemonId }: Props) => {
  return (
    <Stack
      sx={{ marginTop: "auto", marginBottom: "20px" }}
      spacing={2}
      direction="row"
    >
      <Link to={`/pokemon/${pokemonId - 1}`}>
        <Button variant="contained">Previous</Button>
      </Link>
      <Link to={`/pokemon/${pokemonId + 1}`}>
        <Button variant="contained">Next</Button>
      </Link>
    </Stack>
  );
};

export default NavigationFooter;
