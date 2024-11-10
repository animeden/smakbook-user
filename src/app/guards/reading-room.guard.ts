import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const queryParams = route.queryParams;
    const activeParams = Object.values(queryParams).filter(value => value !== '');

    if (activeParams.length < 2) {
      console.log(activeParams)
      window.scrollTo(0, 0);
    }
    return true;
  }
}
