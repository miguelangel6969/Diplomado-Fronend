# user.service.ts

Este archivo es un servicio en Angular llamado `UserService`. Proporciona métodos para interactuar con una API para realizar operaciones relacionadas con usuarios.

## Dependencias

El servicio `UserService` utiliza las siguientes dependencias:

- `HttpClient` y `HttpHeaders` de `@angular/common/http`: Estas dependencias permiten realizar solicitudes HTTP para interactuar con la API.
- `ConfigService` : Este servicio proporciona la configuración necesaria para acceder a la API.
- `map` de `rxjs/operators`: Este operador se utiliza para transformar los resultados de las solicitudes HTTP.
- `Observable` de `rxjs`: Se utiliza para devolver observables que representan los resultados de las solicitudes HTTP.

## Métodos

El servicio `UserService` proporciona los siguientes métodos:

### registrar(user: usuario): Observable<any>

Este método se utiliza para registrar un nuevo usuario en la API. Recibe un objeto `user` que representa los datos del usuario a registrar. Retorna un observable que emite la respuesta de la solicitud HTTP POST a la ruta `${this.cs.base}usuarios` de la API.

### list(): Observable<any>

Este método se utiliza para obtener una lista de usuarios desde la API. Retorna un observable que emite la respuesta de la solicitud HTTP GET a la ruta `${this.cs.base}usuarios/list` de la API.

### user(): Observable<any>

Este método se utiliza para obtener los datos del usuario actual desde la API. Retorna un observable que emite la respuesta de la solicitud HTTP GET a la ruta `${this.cs.base}usuario/data` de la API.

## Inyección de dependencias

El servicio `UserService` se declara como un proveedor de nivel raíz (`providedIn: 'root'`). Esto significa que se puede inyectar en cualquier componente o servicio de la aplicación sin necesidad de configuración adicional.

Para utilizar el servicio, se deben importar las dependencias necesarias y luego se puede acceder a los métodos proporcionados por el servicio.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuarioAuth.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient, private cs: ConfigService) { }

    // Métodos del servicio
}
