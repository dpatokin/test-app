import { Container } from "@mui/material";
import CardsList from "../components/CardsList.tsx";
import useFetchMedia from "../hooks/useFetchMedia.ts";
import { Form } from "../components/Form/Form.tsx";

export default function Home() {
  const { fetchMedia, mediaData } = useFetchMedia();

  return (
    <Container maxWidth="xl" sx={{ pt: 17, pb: 8 }}>
      <Form fetchMedia={fetchMedia} />
      <CardsList mediaData={mediaData} />
    </Container>
  );
}
