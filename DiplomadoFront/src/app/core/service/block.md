# block.service.ts

El archivo `block.service.ts` es un servicio en Angular llamado `BlockService` que se utiliza para interactuar con una API relacionada con la gestión de bloques y transacciones en una aplicación. Este servicio proporciona métodos para generar transacciones, obtener saldo y acceder al historial de transacciones.

## Dependencias

El servicio `BlockService` utiliza las siguientes dependencias:

- `HttpClient` y `HttpHeaders` de `@angular/common/http`: Estas dependencias permiten realizar solicitudes HTTP para interactuar con la API.
- `ConfigService` : Este servicio proporciona la configuración necesaria para acceder a la API.
- `map` de `rxjs/operators`: Este operador se utiliza para transformar los resultados de las solicitudes HTTP.
- `Observable` de `rxjs`: Se utiliza para devolver observables que representan los resultados de las solicitudes HTTP.
- `GenerarTransaccionComponent` de `./../../components/modules/transacciones/generar-transaccion/generar-transaccion.component`: Este componente se utiliza para generar transacciones.

## Clase `BlockService`

La clase `BlockService` es un servicio inyectable que contiene los métodos para interactuar con la API relacionada con bloques y transacciones.

### Constructor

El constructor de la clase `BlockService` recibe las siguientes dependencias inyectadas:

- `http` de tipo `HttpClient`: Se utiliza para realizar solicitudes HTTP.
- `cs` de tipo `ConfigService`: Se utiliza para obtener la configuración de la API.

### Métodos

El servicio `BlockService` proporciona los siguientes métodos:

#### `generarTransaccion(data: any): Observable<any>`

Este método se utiliza para generar una transacción. Recibe un objeto `data` que contiene los datos de la transacción. Retorna un observable que emite la respuesta de la solicitud HTTP POST a la ruta `${this.cs.base}/transaccion` de la API.

#### `saldo(): Observable<any>`

Este método se utiliza para obtener el saldo actual. Retorna un observable que emite la respuesta de la solicitud HTTP GET a la ruta `${this.cs.base}/wallet/saldo` de la API.

#### `historial(): Observable<any>`

Este método se utiliza para obtener el historial de transacciones. Retorna un observable que emite la respuesta de la solicitud HTTP GET a la ruta `${this.cs.base}transaccion/historial` de la API.

## Inyección de dependencias

El servicio `BlockService` se declara como un proveedor de nivel raíz (`providedIn: 'root'`). Esto significa que se puede inyectar en cualquier componente o servicio de la aplicación sin necesidad de configuración adicional.

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
export class BlockService {
    constructor(private http: HttpClient, private cs: ConfigService) { }

    // Métodos del servicio
}
