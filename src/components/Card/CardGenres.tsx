import { Chip, Stack } from "@mui/material";
import { useGlobalData } from "../../hooks/useGlobalData.tsx";

export default function CardGenres({ genreIDs }: { genreIDs: number[] }) {
  const { genres: genresList } = useGlobalData();
  const genres = genresList.filter((genre) => genreIDs.includes(genre.id));

  return (
    <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          variant="outlined"
          size="small"
        />
      ))}
    </Stack>
  );
}
