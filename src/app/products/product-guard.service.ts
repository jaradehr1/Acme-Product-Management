import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }

  /*
    -------- Guards --------
      CanActivate: Guard navigation to a route
    CanDeactivate: Guard navigation from a route
          Resolve: Pro-fetch data before activating a route
          CanLoad: Prevent asynchronous routing
  */

  // we need to check the route url and exsure that the id passed in is valid
  // canActivate can call the ActivatedRouteSnapshot that contains the info about the route at any particular moment in time
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      // we can route to an error page.
      alert("Invalid product Id");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
