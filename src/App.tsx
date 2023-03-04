import { useState } from 'react';
import ButtonHappy from './components/ButtonHappy';
import Cats from './components/Cats';
import { Container, LogoStyle } from './styles/styles';
import Logo from "./img/Logo_MakeMeHappy.png"

function App() {
  const [happy, setHappy] = useState(false)

  const imHappy = () => {
    setHappy(true)
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth',
    });
  }

  return (
    <>
    <Container>
    <LogoStyle src={Logo} alt="Logo made with Vantage Font, Copyright: 'https://www.behance.net/gallery/155571841/VANTAGE-RETRO-FUNK-FREE-FONT?tracking_source=search_projects%7Cindie+fonts'" />
    <ButtonHappy onClick={imHappy}/>
    </Container>
    {happy ? (<Cats/>) : (<></>)}
    
    </>
  );
}

export default App;
