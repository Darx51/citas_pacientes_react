import { useState, useEffect } from "react"
import Error from "./Error"
// lg:w-2/5  el formulario tomara el 40%
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {            //aqui puedo destructurar props o directamente llamar la funcion con su nombre
                                                    // setPacientes
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  // hara que el componente Paciente se renderize unicamente cuando se le aplique un cambio a dicho componente
  useEffect( () => {     
    //    si keys en paciente son mayor a 0 o sea si existe al menos un key
    if( Object.keys(paciente).length > 0){
      //console.log(paciente);        // OJO no confundir la variable 'nombre' con el objeto paciente.nombre
      setNombre(paciente.nombre);   //lo  enviamos paciente.nombre del componente paciente actual al componente padre App y asi con todos los campos
      setPropietario(paciente.propietario);   
      setEmail(paciente.email);   
      setFecha(paciente.fecha);   
      setSintomas(paciente.sintomas);   
    }
  }, [paciente])
                                         // a travez de el prop setPacientes

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {       
    e.preventDefault();
    // Validacion de formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){ // si algun input incluye un vacio
      setError(true);                 // hubo un un error
      return;                         // no sigas a la siguiente linea
    }
    console.log('enviando formulario');    
    setError(false);                      // si ningun input esta vacio, con este error false el div de error desaparece otra vez 
  
  /*  useEffect(()=>{
      if(Object.keys(paciente).length > 0){   // solo si hay algo en paciente, se renderizara
        console.log(paciente);
      }
    }, [paciente])
*/
  
    //Objeto Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
      
    }//console.log(objetoPaciente); 

    if(paciente.id){              //si existe un id estamos editando el paciente, si no existe, estamos agregando uno nuevo
      //Editando el registro
      objetoPaciente.id = paciente.id;      // objetoPaciente es el paciente ya actualizado y paciente es el pasiente anterior
      //console.log(objetoPaciente, paciente);
      
      const pacientesActualizados = pacientes.map( (pacienteState) =>      //iteramos sobre todos los pacientes existentes
        pacienteState.id === paciente.id               // si el id del paciente iterado coincide con el del paciente actual       
        ? objetoPaciente                  // me retorna el que esta en el formulario ya actualizado
        : pacienteState                   // si no, me retorna el que esta en el listado del DOM sin actualizar
      )
      
      setPacientes(pacientesActualizados);      // le enviamos a la App el nuevo paciente actualizado
      setPaciente({})   //limpiamos el state para que paciente tenga solo el paciente actualizado y noexit el viejo sin actualizar
    }else{
      // Agregando nuevo registro
  
      //le pasamos a setPacientes un Array agregandole el [objetoPaciente al Array original pacientes] 
      // OJO no debemos modificar pacientes con push, con ...pacientes generamos un nuevo Array
      objetoPaciente.id = generarId();                //antes de almacenarlo en el state creamos un id para cada paciente que se agrega a traves de objetoPaciente 
      // enviamos el objetoPaciente ya con un id al Array pacientes y lo enviamos al componente padre App
      setPacientes([...pacientes, objetoPaciente]);     
  
    }

    //Reiniciamos el form independiente de si se edita o se agrega un nuevo paciente
    // ya que los setState almacenan cada input, estos son los que limpiamos
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

}                                  


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5"> 
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and {''}
        <span className="text-indigo-600 font-bold text-lg">Manage them</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10">
        {/* error sera true, invocamos el componente Error y le pasamos un mensaje a Error
          y con el siguiente patron le podemos enviar todo lo que queramos al componente Error */}
      { error &&  <Error>  
                    <p>All data are required</p>
                  </Error>} 

        <div className="mb-5"> 
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          < input id="mascota"
                  type="text" 
                  placeholder="Nombre de la mascota"
                  className="border-2 w-full p-2 mt-2 
                  placeholder-gray-400
                  rounded-md"
                  value = {nombre}
                  onChange = { (e) => setNombre(e.target.value) }
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          < input id="propietario"
                  type="text" 
                  placeholder="Nombre del propietario"
                  className="border-2 w-full p-2 mt-2 
                  placeholder-gray-400
                  rounded-md"
                  value = {propietario}
                  onChange = { (e) => setPropietario(e.target.value) }
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          < input id="email"
                  type="email" 
                  placeholder="Email"
                  className="border-2 w-full p-2 mt-2 
                  placeholder-gray-400
                  rounded-md"
                  value = {email}
                  onChange = { (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          < input id="alta"
                  type="date" 
                  className="border-2 w-full p-2 mt-2 
                  placeholder-gray-400
                  rounded-md"
                  value = {fecha}
                  onChange = { (e) => setFecha(e.target.value) }
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea id="sintomas"
                  placeholder="Describe los Sintomas"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                  value = {sintomas}
                  onChange = { (e) => setSintomas(e.target.value) }
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
          hover:bg-indigo-700 cursor-pointer transition-colors"

          value={ paciente.id ? "Editar paciente" : "Agregar paciente"} // si existe un 'id' el texto de sera editar paciente, si no Agregar
        />
      </form>
    </div>
  )
}

export default Formulario
