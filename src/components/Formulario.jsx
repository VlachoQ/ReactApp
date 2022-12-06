import { Fragment, useState } from "react";


export function Formulario() {
    //Dos estados para los elementos email y password
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    //Función que envié los datos a un end point del backend
    const submitHandler = (e) => {
        e.preventDefault();
        alert('Email: ' + document.getElementById('email').value);
        alert('Pass: ' + document.getElementById('pass').value);
        let mail = document.getElementById('email').value;
        let passw = document.getElementById('pass').value;

        //Enviar hacia el back
        useEffect(() => {
            fetch("http://localhost:8080/RestApp/webresources/login")
                .then((respose) => respose.json())
                .then((service) => {
                    console.log(service.message);
                    setText(service.message);

                });
        }, []);

    };
    return (
        //<Fragment>
            <form onSubmit={submitHandler}>
                <div>
                    <hr />
                    <div>
                    <label htmlFor="email"> Nombre: </label>
                    <input name="email" type="text" placeholder="Email" required id="email" />
                    </div>
                    <br />
                   <div>
                   <label htmlFor="pass"> Password: </label>
                    <input name="pass" type="password" placeholder="Password" required id="pass" />
                   </div>
                    
                    
                    <br />
                    <div>
                        <button type="submit" class="btn btn-primary btn-block" >Iniciar Sesion</button>
                    </div>
                    
                </div>    
               
            </form>
        //</Fragment>
    )
}