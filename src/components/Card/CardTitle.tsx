import { CardHeader as MUICardHeader } from "@mui/material";
import { MediaItem } from "../../types";

export default function CardTitle(
  props: Pick<MediaItem, "title" | "original_title" | "original_language">,
) {
  const { title, original_title, original_language } = props;
  const originalTitle =
    original_title && original_language !== "en" ? original_title : undefined;

  return <MUICardHeader title={title} subheader={originalTitle} />;
}
