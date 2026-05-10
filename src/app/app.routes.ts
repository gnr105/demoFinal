import { Routes } from '@angular/router';
import { Home } from './components/layout/home/home';
import { Punto1 } from './components/puntos/punto1/punto1';
import { Punto2 } from './components/puntos/punto2/punto2';
import { Punto3 } from './components/puntos/punto3/punto3';
import { Punto4 } from './components/puntos/punto4/punto4';

export const routes: Routes = [
    {
        path:"",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "punto1",
        component: Punto1
    },
    {
        path: "punto2",
        component: Punto2
    },
    {
        path: "punto3",
        component: Punto3
    },
    {
        path: "punto4",
        component: Punto4
    }
];
