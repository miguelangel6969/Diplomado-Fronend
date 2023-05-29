# config.service.ts

El archivo `config.service.ts` es un servicio en Angular llamado `ConfigService` que proporciona la configuración necesaria para acceder a una API. Este servicio se utiliza para definir la base URL de la API y otros datos de configuración relacionados.

## Dependencias

El servicio `ConfigService` utiliza las siguientes dependencias:

- `environment` de `../../../environments/environment`: Esta dependencia proporciona acceso a las variables de entorno definidas en el archivo `environment.ts`, que contiene la configuración específica del entorno de la aplicación.

## Clase `ConfigService`

La clase `ConfigService` es un servicio inyectable que define las propiedades y métodos relacionados con la configuración de la API.

### Propiedades

- `base`: Es una propiedad que almacena la base URL de la API. Se obtiene del objeto `environment.apiEndpoint` definido en el archivo `environment.ts`. Esta propiedad se utiliza para construir las rutas de las solicitudes a la API.

- `ambiente`: Es una propiedad que almacena el entorno de la aplicación. Se obtiene del objeto `environment.ambiente` definido en el archivo `environment.ts`. Esta propiedad puede ser útil para realizar configuraciones específicas basadas en el entorno de la aplicación.

### Constructor

El constructor de la clase `ConfigService` está vacío, no requiere ninguna inicialización adicional.

## Inyección de dependencias

El servicio `ConfigService` se declara como un proveedor de nivel raíz (`providedIn: 'root'`). Esto significa que se puede inyectar en cualquier componente o servicio de la aplicación sin necesidad de configuración adicional.

Para utilizar el servicio, se debe importar y proporcionar en el módulo principal de la aplicación como un proveedor en la sección `providers`:

```typescript
import { NgModule } from '@angular/core';
import { ConfigService } from './config.service';

@NgModule({
    providers: [
        ConfigService
    ]
})
export class AppModule { }
