
import { useEffect } from "react";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {     // extraemos paciente de ListadoPacientes
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;
  //console.log(paciente)

  const handleEliminar = () =>{
    //console.log('...eliminando');
    const confirmarEliminar = confirm('Are you sure you want delete this patient?')
    if(confirmarEliminar){
      eliminarPaciente(id);
    }
  }
  
  return (
  <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl ">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre {""}
    <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Propietario {""}
    <span className="font-normal normal-case">{propietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email {""}
    <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha de alta {""}
    <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Sintomas {""}
    <span className="font-normal normal-case">{sintomas}</span>
    </p>
    
    <div className="flex justify-between">
    <button type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
                        uppercase rounded-lg"
                        onClick = { () => setPaciente(paciente)} >
    {/*al dar clik en editar aqui le pasamos a la funcion setPaciente el objeto paciente con los datos llenos para
      posteriormente enviar a 'paciente' a App y para despues editarlo 
      lo hacemos con Arrow function para que la funcion se manda llamar hasta dar click, no al instante, si no le enviaramos parametros
      no habria necesidad de ponerlo en Arrow function*/}
                  
            Editar
    </button>

    <button type="button" 
            className="py-2 px-10 bg-red-500 hover:bg-red-800 text-white font-bold
                        uppercase rounded-lg"
                      /*onClick={()=> eliminarPaciente(id) de este modo se elimina inmediatamente*/
                      onClick = {handleEliminar}    /*de este modo va esperar a que ocurra el evento*/
                        >
            Eliminar
    </button>

    </div>

  </div>
  )
}

export default Paciente