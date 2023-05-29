import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { finalize } from 'rxjs/internal/operators/finalize';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        let header = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        });


        header = header.set('Authorization', `JWT ${localStorage.getItem('token')}`);
        const authReq = req.clone({
            headers: header
        });
        return next.handle(authReq);

    }
}
