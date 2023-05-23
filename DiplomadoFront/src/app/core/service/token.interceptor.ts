import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { finalize } from 'rxjs/internal/operators/finalize';
import { LoadingService } from './loading.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private loader: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        this.loader.show();
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
