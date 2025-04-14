import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { routes } from "./app.routes";
import { ApplicationConfig } from "@angular/core";

export const appConfig :ApplicationConfig ={
  providers: [provideRouter(routes,withComponentInputBinding(),withRouterConfig({
    paramsInheritanceStrategy: 'always'
  }))],
}