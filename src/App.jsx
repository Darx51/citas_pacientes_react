import {useState, useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  // y como lo convertimos a string para poderlo tener en LS, ahora debemos pasarlo a json para volverlo a Array
  let pacientesLS = JSON.parse( localStorage.getItem('pacientes')) ?? [];    //si en localStorage no hay nada, entonces agregale un []
  //console.log(pacientesLS)
  
  // OJO NO HAY QUE PONER EN EL SIGUIENTE USESTATE useState([pacientesLS]) DENTRO DE UN ARRAY, SI NO ME CREARA UNO POR DEFAULT QUE NO NECESITAMOS
  const [pacientes, setPacientes] = useState(pacientesLS); // el componente pacientes iniciara con lo que este guardado en localStorage
  const [paciente, setPaciente] = useState({});         // como cada paciente se almacena como objeto, indico aqui que iniciara con un objeto vacio


  useEffect(() => {   // se reenderizara cada que se cree o haya un cambio en el componente pacientes
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));   // para guardar el Array 'pacientes' debemos convertirlo a string
    //console.log(pacientes)
  }, [pacientes])
  

  const eliminarPaciente = (id) =>{
    //console.log(`eliminando paciente ${id}`);
    const pacientesAfterDelete = pacientes.filter(paciente => paciente.id !== id ); //me retorna todos los que son diferentes
   // console.log(pacientesAfterDelete);
    setPacientes(pacientesAfterDelete);       // y aqui lo actualiza dentro del useState tipo Array 'pacientes'
  }

  return (
    <div className="container mx-auto mt-16">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario                    
          pacientes = {pacientes}  // el lado izquierdo es una PROP y el lado derecho es la variable donde se almacenara, lo usaremos en Formulario    
          // pasamos el modificador setPacientes a la variable
          paciente = {paciente} // de este modo le pasamos el useState paciente al formulario, para posteriormente 
          //extraerlo como prop
          setPacientes = {setPacientes}  // por default es una funcion aqui recibimos lo que nos envie el componente formulario
          setPaciente = {setPaciente}   // agrego este setState para que 'paciente' tome el setPaciente actualizado 
        />

        <ListadoPacientes 
          pacientes = {pacientes}   // creamos una prop y le pasamos el Array 'pacientes' que contiene todos los pacientes en objetos
          setPaciente = {setPaciente}   // igual con setPaciente
          /*paciente = {paciente}*/
          eliminarPaciente = {eliminarPaciente}
          setPacientes = {setPacientes}
        />
      </div>
    </div>
  )
  
}

export default App
