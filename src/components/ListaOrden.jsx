import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
export function ListaOrden(){
    return(
        <Table id="t_listaorden" name="t_listaorden" bordercolor="primary" className="table table-bordered" striped bordered hover size="sm">
        <thead>
          <tr>
            <th># de Servicio</th>
            <th>Fecha / Hora</th>
            <th>Largo - Cms </th>
            <th>Ancho - Cms</th>
            <th>Alto - Cms</th>
            <th>Peso - Kgs</th>
            <th>Nombre Envía</th>
            <th>Dirección Origen</th>
            <th>Telefono/celular</th>
            <th>Ciudad Origen</th>
            <th>Ciudad Destino</th>
            <th>Direccion Destino</th>
            <th>Nom. Destinatario</th>
            <th>Tipo Doc. Des.</th>
            <th>No. Doc. Des.</th>
            
            <th>Estado Orden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
                <Link to = '/components/ActOrden/1'>1</Link> 
            </th>
            <td>30/11/2022 - 10:00:00 pm</td>
            <td>15</td>
            <td>15</td>
            <td>10</td>
            <td>2</td>
            <td>Antonio Cervantes</td>
            <td>carrera 5 No. 5-65</td>
            <td>3205478252</td>
            <td>Barranquilla</td>
            <td>Valledupar</td>
            <td>Avenida simon Bolivar</td>
            <td>Juan Perez</td>
            <td>CC</td>
            <td>124548754</td>
            <td>Completado</td>
          </tr>
          <tr>
          <th>
                <Link to = '/components/ActOrden/2'>2</Link> 
            </th>
            <td>02/12/2022 - 08:00:00 pm</td>
            <td>29</td>
            <td>15</td>
            <td>23</td>
            <td>5</td>
            <td>Vladimir Quintero</td>
            <td>carrera 5 No. 5-65</td>
            <td>32054343432</td>
            <td>Bogota</td>
            <td>Barranquilla</td>
            <td>Las Delicias</td>
            <td>Pepito Perez</td>
            <td>CC</td>
            <td>885522</td>
            <td>Cancelado</td>
          </tr>
          <tr>
          <th>
                <Link to = '/components/ActOrden/3'>3</Link> 
            </th>
            <td>04/12/2022 - 08:00:00 pm</td>
            <td>23</td>
            <td>65</td>
            <td>12</td>
            <td>10</td>
            <td>Lionel Messi</td>
            <td>carrera 23 No. 45-65</td>
            <td>3104567890</td>
            <td>Cali</td>
            <td>Valledupar</td>
            <td>las Moras</td>
            <td>Rey Pulido</td>
            <td>CC</td>
            <td>485795136</td>
            <td>Guardado</td>
          </tr>
        </tbody>
      </Table>
    );
   
   }


   