import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Fragment, useState } from "react";
import '../App.css';
import App from '../App';

// import Sonnet from '../../components/Sonnet';

export function Login(){
    //const [text, setText] = useState('');
    //const [isValid, setIsvalid] = useState(true);

    //const submitHandler= (e) =>{
      //  e.preventDefault();
        //let user = document.getElementById('inputEmail').value;
        //let pass = document.getElementById('inputPass').value;

        // if(user === '' || pass === ''){
        //     alert("Debe digitar usuario y contraseña")
        // }else{
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify({user:user, pass:pass})
        //     };
            
        //     Envair hacia el back
        //     fetch("http://localhost:9890/login", requestOptions)
        //     .then((response)=> response.json())
        //     .then((service)=>{
        //         console.log(service.mensaje);
        //         setText(service.mensaje);
        //         setIsvalid(false);
        //     })
        // }

    //}
    //if(isValid){
    
    return (

    
    // <div className="col-12">
    //     <h4>InstaYA - Login</h4>
    //             <br></br>
    <Fragment>
        <form onSubmit={submitHandler}> 
            <Tabs
                defaultActiveKey="login"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                >
                
                <Tab eventKey="login" title="Login">
                
                    <Form>
                
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                        
                            <div className="mt-3 form-floating">
                                    <input id="inputEmail" name="inputEmail" type="email" className="form-control" placeholder='Email address::'></input>
                                    <label for="inputEmail">Email address:</label>
                            </div>
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <div className="mt-3 form-floating">
                                    <input id="inputPass" name="inputPass"  type="password" className="form-control" placeholder='password:'></input>
                                    <label for="inputPass">password:</label>
                            </div>
                        </Form.Group>
                        
                        
                        
                        <Button   id="btnGuardar" name="btnGuardar" variant="primary" type="submit">
                            Login
                        </Button>

                    </Form>
                </Tab>
                    
                <Tab eventKey="registrarse" title="Registrarse">
                    
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <div className="mt-3 form-floating">
                                    <input id="inputEmailReg"  name="inputEmailReg" type="email" className="form-control" placeholder='Email address::'></input>
                                    <label for="inputEmailReg">Email address:</label>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            
                            <div className="mt-3 form-floating">
                                    <input id="inputNomReg"  name="inputNomReg"  type="text" className="form-control" placeholder='Nombre:'></input>
                                    <label for="inputNomReg">Nombre:</label>
                            </div>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <div className="mt-3 form-floating">
                                    <input id="inputPassReg" name="inputPassReg"  type="password" className="form-control" placeholder='password:'></input>
                                    <label for="inputPassReg">password:</label>
                            </div>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Políticas de Tratamiento de Datos." />
                        
                        </Form.Group>
                    
                        <Button id="btnRegistrar" name="btnRegistrar"   variant="primary" type="submit">
                            Registrar
                        </Button>

                    </Form>
                </Tab>

            

            </Tabs>
        </form> 
    </Fragment>
    
    );

    // }else{
    //     return(
    //         <App/>
    //     );
    // } 

}