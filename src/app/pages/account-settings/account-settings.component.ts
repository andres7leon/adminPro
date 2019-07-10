import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document, public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ){
    this.aplicarCheck(link);

    this._ajustes.aplicarTema( tema );
  }

  aplicarCheck( link: any ){
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores){
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    
    for ( let ref of selectores){
      let tema = this._ajustes.ajustes.tema;
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;      
      }
    }

  }

}