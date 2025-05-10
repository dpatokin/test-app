import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { PickerValue } from "@mui/x-date-pickers/internals";
import { FormControl } from "@mui/material";

export default function yearInput({
  setYear,
}: {
  setYear: (year: string) => void;
}) {
  return (
    <FormControl sx={{ gridColumn: "7 / 10" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Year"
          views={["year"]}
          openTo="year"
          maxDate={dayjs()}
          onChange={(value: PickerValue) =>
            setYear(value ? value.format("YYYY") : "")
          }
        />
      </LocalizationProvider>
    </FormControl>
  );
}
