import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'dashboard', url: '/dashboard'},
        { titulo: 'progressBar', url: '/progress'},
        { titulo: 'Graficas', url: '/graficas1'}
      ]
    }
  ]
  constructor() { }
}
