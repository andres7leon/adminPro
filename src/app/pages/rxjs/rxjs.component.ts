import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  
  susbcription: Subscription;

  constructor() { 
    let obs = new Observable( observer => {
      
      let contador = 0;

      let intervalo = setInterval(()=>{
        
        contador += 1;
        
        const salida = {
          valor: contador
        }
        
        observer.next( salida );

        // if(contador === 3 ){
        //     clearInterval(intervalo);
        //     observer.complete();
        // }

        // if( contador === 2 ){
        //   // clearInterval(intervalo);
        //   observer.error('un errorrrr');
        // }

      },1000)

    })
    .pipe( 
      map( resp => {
        return resp['valor'];
      })
     );
  
    this.susbcription = obs.subscribe( numero => {
      console.log("subs", numero);
    }, (error) => {
      console.log("error", error);
    },() => {
      console.log("observador termino");
    });


  }

  ngOnInit() {
  }
  
  ngOnDestroy(){
    console.log("se fue de la paginaaa");
    this.susbcription.unsubscribe();  
  }
}
