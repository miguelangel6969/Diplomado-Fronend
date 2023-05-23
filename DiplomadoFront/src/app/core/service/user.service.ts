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


    registrar(user: usuario): Observable<any> {
        return this.http.post<any>(`${this.cs.base}usuarios`, user);
    }
    list(): Observable<any> {
        return this.http.get<any>(`${this.cs.base}usuarios/list`);
    }
}
