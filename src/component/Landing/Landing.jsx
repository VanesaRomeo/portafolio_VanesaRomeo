
import { About } from './Abount/About';
import { Footer } from './Footer/Footer';
import { Formacion } from './Formacion/Formacion';
import { Habilidades } from './Habilidades/Habilidades';
import { Navbar } from './Navbar/Navbar';
import { Proyectos } from './Proyectos/Proyectos';

export const Landing = () => {
 
  return (
    <>
      <Navbar />

      <main>
        <About/>
        <Proyectos/>
        <Habilidades/>
        <Formacion/>
        <Footer/>
      </main>
    </>
  );
};
