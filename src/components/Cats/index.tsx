import { useEffect, useState } from "react";
import { Container, Img } from "./styles";
import axios from "axios";

interface CatPhotos {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}

interface PhotoProps {
  photo: CatPhotos;
}

function Photo({ photo }: PhotoProps) {
  return (
    <Img src={photo.urls.regular} alt={photo.alt_description} />
  );
}

function Cats() {

  const [photos, setPhotos] = useState<CatPhotos[]>([]);

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos?query=cats&per_page=30&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;    axios.get(url).then((response) => {
      const catPhotos: CatPhotos[] = response.data.results;
      setPhotos(catPhotos)
    })
  }, []);

  return (
    <>
      <Container>
      {photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
      ))}
      </Container>
    </>
  );
}

export default Cats;
