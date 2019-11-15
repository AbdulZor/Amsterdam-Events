import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {SessionService} from "./services/session/session.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Overview11InterceptorService implements HttpInterceptor {

  constructor(private session: SessionService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (req.method === "GET" && req.url.match('/data.json')) {
    //   return next.handle(req);
    // }
    //
    // const token = this.session.getToken();
    //
    // if (token) {
    //   const cloned = req.clone({
    //     setParams: {'auth': token}
    //   });
    //   return next.handle(cloned);
    // }
    return next.handle(req);
  }
}
