# authorization.guard.ts

El archivo `authorization.guard.ts` es un guard en Angular llamado `AuthorizationGuard` que implementa la interfaz `CanActivate`. Este guard se utiliza para proteger las rutas de la aplicación y asegurarse de que el usuario esté autorizado antes de acceder a ellas.

## Dependencias

El guard `AuthorizationGuard` depende de las siguientes dependencias de Angular:

- `Router`: Se utiliza para redirigir al usuario a una ruta específica en caso de que no esté autorizado.

## Clase `AuthorizationGuard`

La clase `AuthorizationGuard` es un guard que implementa la interfaz `CanActivate` y contiene la lógica para comprobar la autorización del usuario.

### Constructor

El constructor de la clase `AuthorizationGuard` recibe la siguiente dependencia inyectada:

- `router` de tipo `Router`: Se utiliza para redirigir al usuario a la página de inicio de sesión en caso de que no esté autorizado.

### Método `canActivate()`

El método `canActivate()` implementa la lógica para comprobar si el usuario está autorizado para acceder a una ruta protegida. Primero, verifica si hay un token almacenado en el almacenamiento local (`localStorage.getItem('token')`). Si se encuentra un token, se permite el acceso y se devuelve `true`. Si no se encuentra un token, se redirige al usuario a la página de inicio de sesión (`this.router.navigate(['/login/login'])`) y se devuelve `false`.

## Inyección de dependencias

El guard `AuthorizationGuard` se declara como un proveedor de nivel raíz (`providedIn: 'root'`). Esto significa que se puede utilizar en el enrutador de la aplicación para proteger las rutas sin necesidad de configuración adicional.

Para utilizar el guard, se debe importar la dependencia necesaria y luego se puede utilizar en las rutas protegidas.

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Lógica de autorización
  }
}
