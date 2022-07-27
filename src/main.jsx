import React from 'react'                   //importa la API de react
import ReactDOM from 'react-dom/client'     // es la version web de react, para la mobile existe native
import './index.css'
import AppEjemplo from './AppEjemplo'                     // importa el archivo App.jsx
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppEjemplo />                     */}
    <App />
  </React.StrictMode>
  
  // OJOO en lugar de insertarlo dentro de la funcion ReactDOM llamada render
  // tambien podemos indicarle que lo inserte el contenido de esta otra forma y aqui debajo
  // document.getElementById('root')
)
