import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/module/transferencia.module';
import { TransferenciaService } from '../transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  transferencias!: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
   this.service.todasTranferencias().subscribe((transferencias: Transferencia[]) =>{
    console.table(transferencias);
    this.transferencias = transferencias;
   })
  }

}
