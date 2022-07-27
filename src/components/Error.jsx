const Error = ({children}) => {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      {/* <p>{mensaje}</p>  pordemos usar este patron para pasar que los componentes se comuniquen o el siguiente*/}
      {children}                      
    </div>
  )
}

export default Error
