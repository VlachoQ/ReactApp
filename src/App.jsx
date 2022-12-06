
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import './App.css';
import { ListaOrden} from './components/ListaOrden';
import { CrearOrden } from './components/CrearOrden';
import { ActOrden } from './components/ActOrden';
import { Service } from './components/Service';

import Menu from './components/Menu';


function App() {


    return (
        <Router>
            <Menu/>
            <Routes>
                <Route path="/listaOrden" element={<ListaOrden />} />
                <Route path="/crearorden" element={<CrearOrden />} />
                <Route path="/actorden" element={<ActOrden />} />
                <Route path="/service" element={<Service />} />
                {/* <Route path="/formulario" element={<Formulario />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
            
        </Router>

    )
}

export default App
