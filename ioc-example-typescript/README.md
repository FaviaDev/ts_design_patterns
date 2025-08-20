# IoC Example (TypeScript)

Este ejemplo muestra cómo implementar el patrón de Inversión de Control (IoC) y la Inyección de Dependencias en TypeScript usando [InversifyJS](https://inversify.io/).

## Estructura

- `index.ts`: Punto de entrada. Inicializa el contenedor y ejecuta la vista de tareas.
- `src/container/`: Configuración del contenedor IoC y tipos de dependencias.
- `src/models/Task.ts`: Modelo de datos para una tarea.
- `src/repositories/TaskRepository.ts`: Interfaz abstracta para el repositorio de tareas.
- `src/repositories/InMemoryTaskRepository.ts`: Implementación en memoria del repositorio de tareas.
- `src/services/TaskService.ts`: Lógica de negocio para gestionar tareas.
- `src/views/TaskView.ts`: Interfaz de usuario por consola usando `inquirer`.
- `tests/TaskService.test.ts`: Pruebas unitarias para el servicio de tareas.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

Esto lanzará una interfaz de consola para agregar y listar tareas.

## Pruebas

```bash
npx jest
```

## Tecnologías
- TypeScript
- InversifyJS
- Inquirer
- Jest

## Notas
- Usa decoradores y metadatos, por lo que es necesario habilitar `experimentalDecorators` y `emitDecoratorMetadata` en `tsconfig.json`.
- El contenedor IoC permite desacoplar la lógica de negocio de la infraestructura.
