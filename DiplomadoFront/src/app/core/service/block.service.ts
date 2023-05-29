import { GenerarTransaccionComponent } from './../../components/modules/transacciones/generar-transaccion/generar-transaccion.component';
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


    generarTransaccion(data: any): Observable<any> {
        return this.http.post<any>(`${this.cs.base}/transaccion`, data);
    }
    saldo(): Observable<any> {
        return this.http.get<any>(`${this.cs.base}/wallet/saldo`);
    }

    historial(): Observable<any> {
        return this.http.get<any>(`${this.cs.base}transaccion/historial`);
    }
}
