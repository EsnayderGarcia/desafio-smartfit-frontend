import {Component, OnInit} from '@angular/core';
import {IUnidade} from "./models/IUnidade";
import {FormGroup} from "@angular/forms";
import {AcademiaService} from "./services/academia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  resultadosEncontrados = 0;
  unidade: IUnidade | null = null;

  constructor(private academiaService: AcademiaService) {
  }

  ngOnInit(): void {
  }

  buscarAcademias(value: {periodo: string, exibirFechadas: boolean}) {
    this.academiaService.buscarAcademias().subscribe(result => {
      this.unidade = result;
      this.resultadosEncontrados = this.unidade.total;
    });
  }

  limpar() {
    this.resultadosEncontrados = 0;
    this.unidade = null;
  }
}
