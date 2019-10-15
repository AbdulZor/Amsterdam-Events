import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {SessionService} from "../session/session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate, CanActivateChild{

  constructor(public router: Router, public sessionService: SessionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (!this.sessionService.isAuthenticated()){
      this.router.navigate(['login'], {queryParams: {return: state.url}});
      return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (!this.sessionService.isAuthenticated()){
      this.router.navigate(['login'], {queryParams: {return: state.url}});
      return false;
    }
    return true;
  }


}
