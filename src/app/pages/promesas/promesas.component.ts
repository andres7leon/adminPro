import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

   this.contarTres().then( (mensaje) => {
      console.log(mensaje);
    })
    .catch( (err) => {
      console.log("error",err);
    })

  }

  ngOnInit() {
  }

  contarTres(): Promise<any>{
    return new Promise( (resolve, reject) => {
      
      let contador = 0;

      let intervalo = setInterval( () => {
        
        contador += 1;
        console.log("contador",contador);

        if( contador === 3 ){
          resolve('Terminoo OK');
          // reject('un simple error')
          clearInterval(intervalo);
        }
        
      },1000);
      

    });
  }
}
