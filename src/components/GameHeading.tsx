import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data:platforms} = usePlatform();
  const platform = platforms?.results.find(p=> p.id === gameQuery.platformId);
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
