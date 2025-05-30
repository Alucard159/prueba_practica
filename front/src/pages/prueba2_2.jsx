export default function Prueba2_2() {
  return (
    <div>
      <h2>
        Caso: <strong>Optimización de Frontend</strong>
      </h2>
      <p>
        <strong>
          ¿Como solucionar un bajo rendimiento en una página con múltiples
          peticiones <code>fetch</code>
        </strong>
        ?
      </p>
      <p>
        Iniciaría un proceso de solución siguiendo estos pasos:
        <ul>
          <li>
            Identificación de cada una de estas peticiones y la identificación
            del objetivo dentro de la página.
          </li>
          <li>
            Revisión de la cantidad de datos que se están obteniendo en cada una
            de estas peticiones, si es posible reducir la cantidad de datos
            obtenidos, se procede a realizar dicha reducción.
          </li>
          <li>
            Implementación de Lazy Loading para las imágenes y otros recursos
            que no son críticos para la carga inicial de la página.
          </li>
          <li>
            Implementación de técnicas de caché para las respuestas de las
            peticiones, de manera que no se realicen múltiples peticiones a la
            misma URL si los datos no han cambiado.
          </li>
          <li>
            Revisión la construcción del DOM, asegurando que no exista
            repocesamiento partiendo de estas peticiones fetch, si es necesario
            se implementa un sistema de paginación o scroll infinito para evitar
            cargar todos los datos de una vez.
          </li>
        </ul>
      </p>
    </div>
  );
}
