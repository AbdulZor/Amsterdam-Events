import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionService} from "./services/session/session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private session: SessionService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.session.token;

    // if (req.url.match('/data.json'))
    //   return next.handle(req);

    if (token) {
      const cloned = req.clone({
        setParams: {'auth': token}
      });
      return next.handle(cloned);
    }
  }
}
