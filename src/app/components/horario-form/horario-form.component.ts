import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-form',
  templateUrl: './horario-form.component.html',
  styleUrls: ['./horario-form.component.scss']
})
export class HorarioFormComponent implements OnInit {
  periodoEscolhido = '';
  mostrarUnidadesFechadas = false;
  resultados = [];

  constructor() { }

  ngOnInit(): void {
  }

 limparForm() {
    this.periodoEscolhido = '';
    this.mostrarUnidadesFechadas = false;
    this.resultados = [];
 }
}
