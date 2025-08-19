# Ejemplos de Patrones de Diseño en JavaScript/TypeScript

Este repositorio contiene implementaciones de varios patrones de diseño clásicos y patrones de presentación, usando JavaScript (y/o TypeScript). Cada carpeta representa un patrón diferente, con código organizado y comentado para facilitar el aprendizaje.

## Estructura del Proyecto

- `adapter-example/`: Implementación del patrón Adapter.
- `decorator-example/`: Implementación del patrón Decorator.
- `facade-example/`: Implementación del patrón Facade.
- `presentation-patterns-example/`: Ejemplos de patrones de presentación: MVC, MVP y MVVM.
- `solid-example/`: Ejemplo de principios SOLID aplicados a un dominio sencillo.

---

## Detalle de cada patrón

### Adapter (`adapter-example/`)
Permite que interfaces incompatibles colaboren. 
- **Ejemplo:** `OldUserStorageAdapter.js` adapta una API antigua (`OldUserStorage.js`) para que funcione con la nueva interfaz esperada por `UserService.js`.

### Decorator (`decorator-example/`)
Permite añadir funcionalidades a objetos de forma dinámica.
- **Ejemplo:** `NotificationDecorator.js` es la clase base para decoradores. `EmailNotificationDecorator.js` y `LogNotificationDecorator.js` añaden funcionalidades a las notificaciones básicas (`BasicNotification.js`).

### Facade (`facade-example/`)
Proporciona una interfaz simplificada a un conjunto de subsistemas complejos.
- **Ejemplo:** `OrderFacade.js` coordina los subsistemas de inventario, pago y envío para simplificar la gestión de pedidos.

### Patrones de Presentación (`presentation-patterns-example/`)
Incluye implementaciones de MVC, MVP y MVVM para comparar sus diferencias.

#### MVC
- **Modelo:** `models/TaskModel.js` gestiona los datos.
- **Vista:** `views/TaskView.js` muestra los datos y recibe entradas del usuario.
- **Controlador:** `controllers/TaskController.js` coordina la lógica entre modelo y vista.

#### MVP
- **Modelo:** `models/TaskModel.js` (compartido).
- **Vista:** `views/TaskView.js` expone una interfaz para el presentador.
- **Presentador:** `presenters/TaskPresenter.js` contiene la lógica de presentación y manipula el modelo.

#### MVVM
- **Modelo:** `models/TaskModel.js` gestiona los datos.
- **ViewModel:** `viewmodels/TaskViewModel.js` expone métodos y datos para la vista, desacoplando la lógica de presentación.
- **Vista:** `views/TaskView.js` interactúa solo con el ViewModel.
- **Ejemplo de inicialización:**
  ```js
  import TaskModel from './models/TaskModel.js';
  import TaskView from './views/TaskView.js';
  import TaskViewModel from './viewmodels/TaskViewModel.js';

  const model = new TaskModel();
  const viewModel = new TaskViewModel(model);
  const view = new TaskView(viewModel);
  view.render();
  ```

---

## Principios SOLID (`solid-example/`)
Ejemplo de aplicación de los principios SOLID en una pequeña arquitectura de libros:
- **Single Responsibility:** Cada clase tiene una única responsabilidad.
- **Open/Closed:** Las clases pueden extenderse sin modificarse.
- **Liskov Substitution:** Las subclases pueden usarse donde se espera la clase base.
- **Interface Segregation:** Las interfaces son específicas y no obligan a implementar métodos innecesarios.
- **Dependency Inversion:** Las dependencias se abstraen mediante interfaces.

---

## Cómo ejecutar los ejemplos

Cada carpeta contiene un `index.js` que puede ejecutarse con Node.js:

```sh
cd <carpeta-del-ejemplo>
npm install # si hay package.json
yarn install # alternativa
node index.js
```

---

## Referencias
- [Refactoring Guru: Design Patterns](https://refactoring.guru/design-patterns)
- [Addy Osmani: Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

---

**Autor:** FaviaDev
