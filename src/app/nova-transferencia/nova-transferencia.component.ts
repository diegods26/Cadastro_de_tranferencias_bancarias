import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/module/transferencia.module';
import { TransferenciaService } from '../transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent  {

  @Output() aoTranferir = new EventEmitter(); 

  valor! : number;
  destino! : number;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transfere(){
    console.log("Nova transferência realizada");
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe((resultado) =>{
      console.log(resultado);
      this.limparCampo();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
    
    );

   
    //console.log("Valor: " + this.valor);
    //console.log("Destino: " + this.destino);
  }

  limparCampo(){
    this.valor = 0;
    this.destino = 0;
  }
}
