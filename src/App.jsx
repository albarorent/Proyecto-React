import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//paginas
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
//css
import "./index.css"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
