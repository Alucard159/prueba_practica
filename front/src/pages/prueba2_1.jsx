export default function Prueba2_1() {
  return (
    <div>
      <h2>Caso: <strong>Autenticación</strong></h2>
      <p>La implementación de JWT parte desde la inclusión de dicha librería y sus dependencias a nuestro proyecto. El proyecto debe considerar una infraestructura que permita el manejo de middlewares para solicitudes que requieran algún tipo de autenticación. Una vez el proyecto considere el uso de middlawares, se procede a modular la herramienta de manera de identificar endpoints o rutas que requieran JWT para poder usar el respectivo middleware. Lo común sería manejar dos tokens, uno a nivel de aplicación y que permita la identificación general y uno que haga referencia directa a la sesión iniciada o al usuario en cuestión, este segundo debe contemplar un tiempo de expiración, el tiempo de vida del segundo token será definido dependiendo de la naturaleza de la herramienta y considerando también la cantidad o volúmen de peticiones que se piensa manejar.
        Para la parte del frontend es un manejo muy similar, con la excepción de que la generación y manejo de los tokens se queda del lado del servidor, asignando un espacio en el navegador, posiblemente con localstorage para guardar el segundo token antes mencionado. Se definen las rutas protegidas y se implementa un nuevo middlaware enfocado en verificar la validez del token, si este es válido se permite el acceso a la ruta protegida, en caso contrario se redirige al usuario a una página de error o de inicio de sesión.
      </p>
      <p>Marcando el paso a paso el desarrollo con JWT, sería:
        <ul>
          <li>Instalación de la librería JWT y sus dependencias.</li>
          <li>Configuración del middleware de autenticación en el backend.</li>
          <li>Modularización de los endpoints que requieren autenticación.</li>
          <li>Implementación del manejo de tokens en el frontend.</li>
          <li>Definición de rutas protegidas y middleware de validación de token.</li>
        </ul>
      </p>
    </div>
  );
}