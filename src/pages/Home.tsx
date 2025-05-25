import { Container } from "@mui/material";
import CardsList from "../components/CardsList.tsx";
import useFetchMedia from "../hooks/useFetchMedia.ts";
import { Form } from "../components/Form/Form.tsx";
import { useState } from "react";
import { FetchMediaParams } from "../types";

export default function Home() {
  const { fetchMedia, mediaData } = useFetchMedia();
  const [loading, setLoading] = useState(false);

  const handleFetchMedia = async (params: FetchMediaParams) => {
    setLoading(true);
    await fetchMedia(params);
    setLoading(false);
  };

  return (
    <Container maxWidth="xl" sx={{ pt: 17, pb: 8 }}>
      <Form fetchMedia={handleFetchMedia} loading={loading} />
      <CardsList mediaData={mediaData} loading={loading} />
    </Container>
  );
}
