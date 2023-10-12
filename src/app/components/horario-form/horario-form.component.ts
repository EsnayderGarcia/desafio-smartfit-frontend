import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUnidade} from "../../models/IUnidade";
import {AcademiaService} from "../../services/academia.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-horario-form',
  templateUrl: './horario-form.component.html',
  styleUrls: ['./horario-form.component.scss']
})
export class HorarioFormComponent implements OnInit {
  @Input() resultadosEncontrados!: number;
  @Output() buscarAcademias = new EventEmitter<{periodo: string, exibirFechadas: boolean}>();
  @Output() limparForm = new EventEmitter();
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      periodo: '',
      exibirFechadas: false
    });
  }

  emitirBuscarAcademias() {
    this.buscarAcademias.emit(this.form.value);
  }

  emitirLimparForm() {
    this.form.reset();
    this.limparForm.emit();
  }
}
