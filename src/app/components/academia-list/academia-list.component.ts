import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-academia-list',
  templateUrl: './academia-list.component.html',
  styleUrls: ['./academia-list.component.scss']
})
export class AcademiaListComponent implements OnInit {
  @Input() resultados!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
