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


    login(UserName: string, Password: string): Observable<any> {
        const body = { email: UserName, password: Password };
        return this.http.post(`${this.cs.base}auth`, body).pipe(
            map((resp: any) => {
                if (resp.access_token) {
                    localStorage.clear();
                    localStorage.setItem('token', resp.access_token);
                    localStorage.setItem('refresToken', resp.refresh_token);
                    return resp;
                }
                return resp;
            })
        );
    }
}
