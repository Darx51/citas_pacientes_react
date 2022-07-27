
function AppEjemplo() {
  
  //className="App"
  // el nivel mas alto solo debemos retornar 1 solo elemento en este caso estamos retornando un div
  // y dentro tenemos el demas contenido
  
  const edad = 18;
  return (
    <>
    { edad >=18 ? "eres mayor" : "eres menor"  }                      
      <h1>{'Hello WORLD SOY EL EJEMPLO'.toLowerCase()}</h1>         
      <input type="text" />
    </>
  )

}

export default AppEjemplo
