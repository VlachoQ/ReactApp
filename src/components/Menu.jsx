
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <Navbar fixed="top"  bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <h1>Insta YA</h1> </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                            
                            <Nav.Link href="/listaOrden">Listado de Ordenes</Nav.Link>
                            <Nav.Link href="/crearorden">Creación de Orden</Nav.Link>
                            <Nav.Link href="/actorden">Actualización de Orden</Nav.Link>
                             <Nav.Link className="nav-link disabled" href="/service">Services</Nav.Link>
                            {/*<Nav.Link href="/formulario">Quines Somos</Nav.Link> */}
                            {/* <Nav.Link href="/login">Login</Nav.Link> */}
                        
                    </Nav>
                    <Nav>
                        <NavDropdown title= "User Name">
                            <NavDropdown.Item>Log Out</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

            

    );

}

export default Menu