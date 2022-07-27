import { useEffect } from "react";
import Paciente from "./Paciente"

// en el otro caso era 2/5 en este 3/5 para que cubra el resto de la pantalla, 5/5 es 1 entero
// solo de TABLETS PARA ARRIBA se veran los 2 scrolls md:h-screen y tambien se dividira en 2 md:w-1/2

// como  en el DOM ya me aparecen las props de pacientes ahora si lo puedo extraer como parametro en la funcion 
const ListadoPacientes = ({pacientes, paciente, setPaciente, eliminarPaciente}) => {  
  //console.log(pacientes);
  /*useEffect(()=>{
  // para que Paciente se ejecute solo si pacientes tiene algun objeto paciente y no al recargarse vacio
    if(pacientes.length > 0){     
      console.log('nuevo Paciente Reto');
    }
  },[paciente])
  */
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (                                    // si hay pacientes, los mostramos
      <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-indigo-600 mt-5 mb-10 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y citas</span>
        </p>

        {pacientes.map( (paciente) => (
          // <h1>{paciente.nombre}</h1>                  // imprimira un componente Paciente por cada paciente que haya en el Array
          <Paciente 
            key = {paciente.id}
            paciente = {paciente}    // para que tome los valores de cada paciente le pasamos a un prop paciente el valor de {paciente}
            setPaciente = {setPaciente}   // aqui recibimos la prop setPaciente al componente Paciente para modificar dicho paciente
            eliminarPaciente = {eliminarPaciente}   //recibimos y pasamos el prop de eliminarPaciente al componente Paciente
          />              
        ))}
      </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">There are no Patients</h2>
          <p className="text-indigo-600 mt-5 mb-10 text-center">
            Add patients on this space {''}
          <span className="text-indigo-600 font-bold">and they will apear on this place</span>
          </p>
        </>
      )}                                   
    </div>
  )
}

export default ListadoPacientes
