# auth.service.ts

El archivo `auth.service.ts` es un servicio en Angular llamado `AuthService` que se utiliza para realizar operaciones relacionadas con la autenticación en una aplicación. Este servicio proporciona un método para realizar el inicio de sesión de un usuario.

## Dependencias

El servicio `AuthService` utiliza las siguientes dependencias:

- `HttpClient` y `HttpHeaders` de `@angular/common/http`: Estas dependencias permiten realizar solicitudes HTTP para interactuar con la API.
- `ConfigService` : Este servicio proporciona la configuración necesaria para acceder a la API.
- `map` de `rxjs/operators`: Este operador se utiliza para transformar los resultados de las solicitudes HTTP.
- `Observable` de `rxjs`: Se utiliza para devolver observables que representan los resultados de las solicitudes HTTP.

## Clase `AuthService`

La clase `AuthService` es un servicio inyectable que contiene métodos relacionados con la autenticación.

### Constructor

El constructor de la clase `AuthService` recibe las siguientes dependencias inyectadas:

- `http` de tipo `HttpClient`: Se utiliza para realizar solicitudes HTTP.
- `cs` de tipo `ConfigService`: Se utiliza para obtener la configuración de la API.

### Métodos

El servicio `AuthService` proporciona los siguientes métodos:

#### `login(UserName: string, Password: string): Observable<any>`

Este método se utiliza para realizar el inicio de sesión de un usuario. Recibe los parámetros `UserName` y `Password`, que representan el nombre de usuario y la contraseña del usuario respectivamente. Realiza una solicitud HTTP POST a la ruta `${this.cs.base}auth` de la API, pasando los datos de inicio de sesión en el cuerpo de la solicitud.

El método utiliza el operador `map` para transformar la respuesta de la solicitud HTTP. Si la respuesta contiene un token de acceso (`resp.access_token`), se almacena en el almacenamiento local (`localStorage`) junto con el token de actualización (`resp.refresh_token`). Luego, se devuelve la respuesta completa.

### Almacenamiento de tokens

El método `login` almacena el token de acceso y el token de actualización en el almacenamiento local (`localStorage`) utilizando las siguientes claves:

- `token`: Almacena el token de acceso (`resp.access_token`).
- `refresToken`: Almacena el token de actualización (`resp.refresh_token`).

Estos tokens pueden ser utilizados posteriormente para autenticar y autorizar las solicitudes a la API.

## Inyección de dependencias

El servicio `AuthService` se declara como un proveedor de nivel raíz (`providedIn: 'root'`). Esto significa que se puede inyectar en cualquier componente o servicio de la aplicación sin necesidad de configuración adicional.

Para utilizar el servicio, se deben importar las dependencias necesarias y luego se puede acceder a los métodos proporcionados por el servicio.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private cs: ConfigService) { }

    // Métodos del servicio
}
