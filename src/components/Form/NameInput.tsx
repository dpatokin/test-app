import { FormControl, TextField } from "@mui/material";

export default function NameInput({
  mediaName,
  setMediaName,
  error = false,
  helperText = "",
}: {
  mediaName: string;
  setMediaName: (mediaName: string) => void;
  error: boolean;
  helperText: string;
}) {
  return (
    <FormControl sx={{ gridColumn: "7 / 10" }}>
      <TextField
        id="media-name-input"
        label="Movie name"
        value={mediaName}
        onChange={(e) => setMediaName(e.target.value)}
        error={error}
        helperText={helperText}
      />
    </FormControl>
  );
}
