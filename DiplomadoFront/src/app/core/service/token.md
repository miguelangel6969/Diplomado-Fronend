# token.interceptor

El archivo `token.interceptor` es un interceptor en Angular que se utiliza para adjuntar un token de autenticación a las solicitudes salientes. Este interceptor se encarga de interceptar las solicitudes HTTP y agregar el token de autenticación en el encabezado de la solicitud.

## Dependencias

El interceptor `token.interceptor` utiliza las siguientes dependencias:

- `HttpInterceptor` y `HttpHandler` de `@angular/common/http`: Estas dependencias son necesarias para implementar el interceptor y manejar las solicitudes HTTP.
- `Observable` de `rxjs`: Se utiliza para devolver un observable que representa la respuesta de la solicitud HTTP.
- `finalize` de `rxjs/internal/operators/finalize`: Este operador se utiliza para realizar una acción final después de que la solicitud HTTP se haya completado, en este caso, para agregar el token de autenticación al encabezado de la solicitud.

## Clase `TokenInterceptor`

La clase `TokenInterceptor` implementa la interfaz `HttpInterceptor` y proporciona la lógica para adjuntar el token de autenticación a las solicitudes salientes.

### Constructor

El constructor de la clase `TokenInterceptor` está vacío, no requiere ninguna inicialización adicional.

### Método `intercept`

El método `intercept` es el método principal del interceptor que se ejecuta cada vez que se realiza una solicitud HTTP. Recibe el objeto `req` de tipo `HttpRequest<any>`, que representa la solicitud HTTP original, y el objeto `next` de tipo `HttpHandler`, que representa el siguiente controlador de solicitud en la cadena.

Dentro del método `intercept`, se realiza lo siguiente:

1. Se crea un objeto `header` de tipo `HttpHeaders` que contiene los encabezados de la solicitud. En este caso, se establece el encabezado `Content-Type` como `application/json;charset=UTF-8` y se permite el acceso desde cualquier origen con el encabezado `Access-Control-Allow-Origin` establecido como `'*'`.
2. Se obtiene el token de autenticación del almacenamiento local (`localStorage.getItem('token')`) y se agrega al encabezado `Authorization` en el formato `JWT {token}`.
3. Se clona la solicitud original (`req`) y se le asigna el nuevo encabezado con el token de autenticación agregado.
4. Se pasa la solicitud clonada al siguiente controlador de solicitud (`next.handle(authReq)`).
5. Se devuelve el observable que representa la respuesta de la solicitud HTTP.

## Inyección de dependencias

El interceptor `TokenInterceptor` no requiere ninguna inyección de dependencias adicional.

Para utilizar el interceptor, se debe proporcionar en el módulo principal de la aplicación como un proveedor en la sección `providers`:

```typescript
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class AppModule { }
