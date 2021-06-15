# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Comunicación
En esta aplicación, la comunicación entre componentes se ha llevado a cabo de dos maneras
diferentes que se explican a continuación.

### Componentes padres a hijos
Para realizar la comunicación de padre a hijo se utiliza una función, la cual es creada e 
implementada en el componente padre, y se le pasa al componente hijo mediante las props. El 
componente hijo prodrá avisar al padre del cambio ejecutando dicha función.
Éste método se ha utilizado para avisar a DetailView(componente padre) que
Selector(componente nieto) ha cambiado la opción seleccionada.

### EventBus
La comunicación entre eventos ha sido aplicada a la funcionalidad de actualizar el número
del carrito en el header. Este método de comunicación facilita el desacoplamiento entre 
componentes ya que el evento es creado en el lugar donde el dato actualizado es recibido
y se crea el listener en el sitio en el que se requiere dicho dato. De esta forma, únicamente
están implicados los componentes necesarios, el encargado de generar el evento, y el que
requiere ese evento.

## Persistencia
La prueba cuenta con dos maneras de persistir datos, en lo relativo a la aplicación se ha 
utilizado localStorage, en cambio, para el almacenamiento en red se ha utilizado localForage.

### Aplicación
localStorage es un mecanismo de almacenamiento que permite crear instancias del objeto 
'Storage', a través del cual es posible crear, recuperar o eliminar datos.

### Red
Para la red se ha utilizado localForage, que consiste en una librería de almacenamiento 
asícrono para Javascript, la cual utiliza internamente indexDB.  

## Grid
Es un sistema de grid basado en boostrap mediante 'styled-bootstrap-grid', el cual evita el 
acoplamiento a la librería, permitiendo cambiar de librería fácilmente.

## Repository
Para la realización de las peticiones se ha utilizado la librería Axios. Para llevarlo a cabo
el repositorio se ha dividido en dos archivos, por un lado lo referente a la obtención de 
productos, y por otra parte el carrito. Además de ello, han sido  parametrizados los datos de
configuración de la Api para facilitar su modificación en el caso de ser necesario.

## Lógica de negocio
La lógica de negocio ha sido encapsulada en los componentes página, con el fin de que
los componentes visuales no alberguen lógica y de este modo reducir su complejidad.

## Roadmap
### Traducciones
Con el fin de ofrecer la aplicación en varios idiomas, se utilizaría  i18Next como un 
sencillo sistema de traducciones.

### Varias imágenes 
Preparación de un carrusel para la posibilidad de que en un futuro un producto pueda estar
compuesto de varias imágenes, y sea necesario que el detalle de un producto deba mostrar de
un carrusel para ello.

### Scroll infinito
Con el fin de mejorar el rendimiento en la aplicación, se desarrollaría una funcionalidad que
pida de forma paginada los productos.

### Manejo de errores
En cualquier aplicación es necesario un buen sistema de manejo de errores para de esta manera,
tenerlos controlados o en su defecto, sea más rápida su localización.

### Animaciones
Las animaciones, microinteracciones, transiciones de página o spinners, suavizan la forma en
la que visualmente se realizan la carga de imágenes o el cambio de una página a otra, 
mejorando la experiencia del usuario.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
