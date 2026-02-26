import './App.css'
import Kayttajakortti from "./kayttajakortti.jsx";
import  infolista from './infolista.jsx';
import tervehdys from './tervehdys.jsx';

function App() {
  return (
    <div>
      <h1>Kayttajakortti</h1>
      <Kayttajakortti
        nimi="Jasper"
        lista={["React", "JavaScript", "CSS"]}
      />
    </div>
  );
}

export default App;
