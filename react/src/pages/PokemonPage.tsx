import {
  Card,
  CardMedia,
  Checkbox,
  CircularProgress,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useQueries } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import { IPokemon, IPokemonSpecies } from "../interfaces/PokemonInterfaces";
import AbilitiesCard from "../components/AbilitiesCard";
import InfoCard from "../components/InfoCard";
import NavigationFooter from "../components/NavigationFooter";
import TypesCard from "../components/TypesCard";

const PokemonPage = () => {
  const params = useParams();
  const [alignment, setAlignment] = useState("default");
  const [animate, setAnimate] = useState(true);

  const [pokemonQuery, pokemonSpeciesQuery] = useQueries({
    queries: [
      {
        queryKey: ["pokemon", params.name],
        queryFn: async () => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${params.name}/`
          );
          const data = (await res.json()) as IPokemon;
          return data;
        },
      },
      {
        queryKey: ["pokemon-species", params.name],
        queryFn: async () => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${params.name}/`
          );
          const data = (await res.json()) as IPokemonSpecies;
          return data;
        },
      },
    ],
  });

  const pokemon = pokemonQuery.data;
  const pokemonSpecies = pokemonSpeciesQuery.data;

  if (pokemonQuery.error || pokemonSpeciesQuery.error) {
    return <h1>Something went wrong!</h1>;
  }

  const handleSpriteChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment != null) {
      setAlignment(newAlignment);
    }
  };

  const handleToggleAnimate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnimate(event.target.checked);
  };

  if (pokemon && !pokemonQuery.isLoading) {
    window.history.pushState(null, "", `/pokemon/${pokemon.name}`);
  }

  return (
    <Container
      sx={{
        height: "100vh",
        alignItems: "center",
        paddingTop: "calc(20vh)",
        display: "flex",
        flexDirection: "column",
      }}
      maxWidth="sm"
    >
      {!pokemon || pokemonQuery.isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Card sx={{ p: 3, alignItems: "top", width: "100%" }}>
            <Typography variant="h2" className="capitalise">
              {pokemon.name}
            </Typography>
            <Typography sx={{ paddingBottom: "20px" }} variant="h5">
              #{pokemon.id}
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleSpriteChange}
              sx={{ height: "35px" }}
            >
              <ToggleButton value={"default"}>Default</ToggleButton>
              <ToggleButton value={"shiny"}>Shiny</ToggleButton>
            </ToggleButtonGroup>
            <Checkbox checked={animate} onChange={handleToggleAnimate} />
            <Grid2 container spacing={2}>
              <Grid2 xs={6}>
                {animate ? (
                  <CardMedia
                    className="sprite"
                    sx={{
                      height: 136,
                      width: 136,
                      imageRendering: "pixelated",
                      backgroundSize: "contain",
                      m: 4,
                    }}
                    image={
                      alignment === "default"
                        ? pokemon.sprites.versions["generation-v"][
                            "black-white"
                          ].animated.front_default
                        : pokemon.sprites.versions["generation-v"][
                            "black-white"
                          ].animated.front_shiny
                    }
                  />
                ) : (
                  <CardMedia
                    className="sprite"
                    sx={{
                      height: 200,
                      width: 200,
                      imageRendering: "pixelated",
                    }}
                    image={
                      alignment === "default"
                        ? pokemon.sprites.versions["generation-v"][
                            "black-white"
                          ].front_default
                        : pokemon.sprites.versions["generation-v"][
                            "black-white"
                          ].front_shiny
                    }
                  />
                )}
              </Grid2>
              <Grid2 xs={6}>
                <InfoCard>
                  <Typography sx={{ padding: 2 }} variant="body2">
                    {!pokemonSpecies || pokemonSpeciesQuery.isLoading ? (
                      <CircularProgress />
                    ) : (
                      pokemonSpecies.flavor_text_entries[0].flavor_text.replaceAll(
                        "\f",
                        " "
                      )
                    )}
                  </Typography>
                </InfoCard>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2}>
              <Grid2 xs={6}>
                <TypesCard types={pokemon.types} />
              </Grid2>
              <Grid2 xs={6}>
                <AbilitiesCard abilities={pokemon.abilities} />
              </Grid2>
            </Grid2>
          </Card>
          <NavigationFooter pokemonId={pokemon.id} />
        </>
      )}
    </Container>
  );
};

export default PokemonPage;
