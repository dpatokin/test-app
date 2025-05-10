import { FormControl, TextField } from "@mui/material";

export default function NameInput({
  mediaName,
  setMediaName,
  disabled,
}: {
  mediaName: string;
  setMediaName: (mediaName: string) => void;
  disabled: boolean;
}) {
  return (
    <FormControl sx={{ gridColumn: "7 / 10" }}>
      <TextField
        id="media-name-input"
        label="Movie name"
        value={mediaName}
        disabled={disabled}
        onChange={(e) => setMediaName(e.target.value)}
      />
    </FormControl>
  );
}
