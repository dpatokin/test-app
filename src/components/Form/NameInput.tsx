import { FormControl, TextField } from "@mui/material";

export default function NameInput({
  mediaName,
  setMediaName,
  disabled,
  error = false,
  helperText = "",
}: {
  mediaName: string;
  setMediaName: (mediaName: string) => void;
  disabled: boolean;
  error: boolean;
  helperText: string;
}) {
  return (
    <FormControl sx={{ gridColumn: "7 / 10" }}>
      <TextField
        id="media-name-input"
        label="Movie name"
        value={mediaName}
        disabled={disabled}
        onChange={(e) => setMediaName(e.target.value)}
        error={error}
        helperText={helperText}
      />
    </FormControl>
  );
}
