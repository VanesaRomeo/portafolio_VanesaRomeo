import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HeroCV } from './component/HeroCV/HeroCV';
import { Landing } from './component/Landing/Landing';

function App() {
  const [MostrarLanding, setMostrarLanding] = useState(false);

  return (
    <BrowserRouter>
      {!MostrarLanding && (
        <HeroCV onEnterPortafolio={() => setMostrarLanding(true)} />
      )}

      {MostrarLanding && <Landing />}
    </BrowserRouter>
  );
}

export default App;